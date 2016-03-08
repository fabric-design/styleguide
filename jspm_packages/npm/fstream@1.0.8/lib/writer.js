/* */ 
(function(process) {
  module.exports = Writer;
  var fs = require('graceful-fs');
  var inherits = require('inherits');
  var rimraf = require('rimraf');
  var mkdir = require('mkdirp');
  var path = require('path');
  var umask = process.platform === 'win32' ? 0 : process.umask();
  var getType = require('./get-type');
  var Abstract = require('./abstract');
  inherits(Writer, Abstract);
  Writer.dirmode = parseInt('0777', 8) & (~umask);
  Writer.filemode = parseInt('0666', 8) & (~umask);
  var DirWriter = require('./dir-writer');
  var LinkWriter = require('./link-writer');
  var FileWriter = require('./file-writer');
  var ProxyWriter = require('./proxy-writer');
  function Writer(props, current) {
    var self = this;
    if (typeof props === 'string') {
      props = {path: props};
    }
    if (!props.path)
      self.error('Must provide a path', null, true);
    var type = getType(props);
    var ClassType = Writer;
    switch (type) {
      case 'Directory':
        ClassType = DirWriter;
        break;
      case 'File':
        ClassType = FileWriter;
        break;
      case 'Link':
      case 'SymbolicLink':
        ClassType = LinkWriter;
        break;
      case null:
      default:
        ClassType = ProxyWriter;
        break;
    }
    if (!(self instanceof ClassType))
      return new ClassType(props);
    Abstract.call(self);
    self.type = props.type;
    self.props = props;
    self.depth = props.depth || 0;
    self.clobber = props.clobber === false ? props.clobber : true;
    self.parent = props.parent || null;
    self.root = props.root || (props.parent && props.parent.root) || self;
    self._path = self.path = path.resolve(props.path);
    if (process.platform === 'win32') {
      self.path = self._path = self.path.replace(/\?/g, '_');
      if (self._path.length >= 260) {
        self._swallowErrors = true;
        self._path = '\\\\?\\' + self.path.replace(/\//g, '\\');
      }
    }
    self.basename = path.basename(props.path);
    self.dirname = path.dirname(props.path);
    self.linkpath = props.linkpath || null;
    props.parent = props.root = null;
    self.size = props.size;
    if (typeof props.mode === 'string') {
      props.mode = parseInt(props.mode, 8);
    }
    self.readable = false;
    self.writable = true;
    self._buffer = [];
    self.ready = false;
    self.filter = typeof props.filter === 'function' ? props.filter : null;
    self._stat(current);
  }
  Writer.prototype._create = function() {
    var self = this;
    fs[self.props.follow ? 'stat' : 'lstat'](self._path, function(er) {
      if (er) {
        return self.warn('Cannot create ' + self._path + '\n' + 'Unsupported type: ' + self.type, 'ENOTSUP');
      }
      self._finish();
    });
  };
  Writer.prototype._stat = function(current) {
    var self = this;
    var props = self.props;
    var stat = props.follow ? 'stat' : 'lstat';
    var who = self._proxy || self;
    if (current)
      statCb(null, current);
    else
      fs[stat](self._path, statCb);
    function statCb(er, current) {
      if (self.filter && !self.filter.call(who, who, current)) {
        self._aborted = true;
        self.emit('end');
        self.emit('close');
        return;
      }
      if (er || !current) {
        return create(self);
      }
      self._old = current;
      var currentType = getType(current);
      if (currentType !== self.type) {
        return rimraf(self._path, function(er) {
          if (er)
            return self.error(er);
          self._old = null;
          create(self);
        });
      }
      create(self);
    }
  };
  function create(self) {
    mkdir(path.dirname(self._path), Writer.dirmode, function(er, made) {
      if (er)
        return self.error(er);
      self._madeDir = made;
      return self._create();
    });
  }
  function endChmod(self, want, current, path, cb) {
    var wantMode = want.mode;
    var chmod = want.follow || self.type !== 'SymbolicLink' ? 'chmod' : 'lchmod';
    if (!fs[chmod])
      return cb();
    if (typeof wantMode !== 'number')
      return cb();
    var curMode = current.mode & parseInt('0777', 8);
    wantMode = wantMode & parseInt('0777', 8);
    if (wantMode === curMode)
      return cb();
    fs[chmod](path, wantMode, cb);
  }
  function endChown(self, want, current, path, cb) {
    if (process.platform === 'win32')
      return cb();
    if (!process.getuid || process.getuid() !== 0)
      return cb();
    if (typeof want.uid !== 'number' && typeof want.gid !== 'number')
      return cb();
    if (current.uid === want.uid && current.gid === want.gid)
      return cb();
    var chown = (self.props.follow || self.type !== 'SymbolicLink') ? 'chown' : 'lchown';
    if (!fs[chown])
      return cb();
    if (typeof want.uid !== 'number')
      want.uid = current.uid;
    if (typeof want.gid !== 'number')
      want.gid = current.gid;
    fs[chown](path, want.uid, want.gid, cb);
  }
  function endUtimes(self, want, current, path, cb) {
    if (!fs.utimes || process.platform === 'win32')
      return cb();
    var utimes = (want.follow || self.type !== 'SymbolicLink') ? 'utimes' : 'lutimes';
    if (utimes === 'lutimes' && !fs[utimes]) {
      utimes = 'utimes';
    }
    if (!fs[utimes])
      return cb();
    var curA = current.atime;
    var curM = current.mtime;
    var meA = want.atime;
    var meM = want.mtime;
    if (meA === undefined)
      meA = curA;
    if (meM === undefined)
      meM = curM;
    if (!isDate(meA))
      meA = new Date(meA);
    if (!isDate(meM))
      meA = new Date(meM);
    if (meA.getTime() === curA.getTime() && meM.getTime() === curM.getTime())
      return cb();
    fs[utimes](path, meA, meM, cb);
  }
  Writer.prototype._finish = function() {
    var self = this;
    if (self._finishing)
      return;
    self._finishing = true;
    var todo = 0;
    var errState = null;
    var done = false;
    if (self._old) {
      self._old.atime = new Date(0);
      self._old.mtime = new Date(0);
      setProps(self._old);
    } else {
      var stat = self.props.follow ? 'stat' : 'lstat';
      fs[stat](self._path, function(er, current) {
        if (er) {
          if (er.code === 'ENOENT' && (self.type === 'Link' || self.type === 'SymbolicLink') && process.platform === 'win32') {
            self.ready = true;
            self.emit('ready');
            self.emit('end');
            self.emit('close');
            self.end = self._finish = function() {};
            return;
          } else
            return self.error(er);
        }
        setProps(self._old = current);
      });
    }
    return;
    function setProps(current) {
      todo += 3;
      endChmod(self, self.props, current, self._path, next('chmod'));
      endChown(self, self.props, current, self._path, next('chown'));
      endUtimes(self, self.props, current, self._path, next('utimes'));
    }
    function next(what) {
      return function(er) {
        if (errState)
          return;
        if (er) {
          er.fstream_finish_call = what;
          return self.error(errState = er);
        }
        if (--todo > 0)
          return;
        if (done)
          return;
        done = true;
        if (!self._madeDir)
          return end();
        else
          endMadeDir(self, self._path, end);
        function end(er) {
          if (er) {
            er.fstream_finish_call = 'setupMadeDir';
            return self.error(er);
          }
          self.emit('end');
          self.emit('close');
        }
      };
    }
  };
  function endMadeDir(self, p, cb) {
    var made = self._madeDir;
    var d = path.dirname(p);
    endMadeDir_(self, d, function(er) {
      if (er)
        return cb(er);
      if (d === made) {
        return cb();
      }
      endMadeDir(self, d, cb);
    });
  }
  function endMadeDir_(self, p, cb) {
    var dirProps = {};
    Object.keys(self.props).forEach(function(k) {
      dirProps[k] = self.props[k];
      if (k === 'mode' && self.type !== 'Directory') {
        dirProps[k] = dirProps[k] | parseInt('0111', 8);
      }
    });
    var todo = 3;
    var errState = null;
    fs.stat(p, function(er, current) {
      if (er)
        return cb(errState = er);
      endChmod(self, dirProps, current, p, next);
      endChown(self, dirProps, current, p, next);
      endUtimes(self, dirProps, current, p, next);
    });
    function next(er) {
      if (errState)
        return;
      if (er)
        return cb(errState = er);
      if (--todo === 0)
        return cb();
    }
  }
  Writer.prototype.pipe = function() {
    this.error("Can't pipe from writable stream");
  };
  Writer.prototype.add = function() {
    this.error("Can't add to non-Directory type");
  };
  Writer.prototype.write = function() {
    return true;
  };
  function objectToString(d) {
    return Object.prototype.toString.call(d);
  }
  function isDate(d) {
    return typeof d === 'object' && objectToString(d) === '[object Date]';
  }
})(require('process'));
