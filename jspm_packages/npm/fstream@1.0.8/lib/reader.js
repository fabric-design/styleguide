/* */ 
(function(process) {
  module.exports = Reader;
  var fs = require('graceful-fs');
  var Stream = require('stream').Stream;
  var inherits = require('inherits');
  var path = require('path');
  var getType = require('./get-type');
  var hardLinks = Reader.hardLinks = {};
  var Abstract = require('./abstract');
  inherits(Reader, Abstract);
  var LinkReader = require('./link-reader');
  function Reader(props, currentStat) {
    var self = this;
    if (!(self instanceof Reader))
      return new Reader(props, currentStat);
    if (typeof props === 'string') {
      props = {path: props};
    }
    if (!props.path) {
      self.error('Must provide a path', null, true);
    }
    var type;
    var ClassType;
    if (props.type && typeof props.type === 'function') {
      type = props.type;
      ClassType = type;
    } else {
      type = getType(props);
      ClassType = Reader;
    }
    if (currentStat && !type) {
      type = getType(currentStat);
      props[type] = true;
      props.type = type;
    }
    switch (type) {
      case 'Directory':
        ClassType = require('./dir-reader');
        break;
      case 'Link':
      case 'File':
        ClassType = require('./file-reader');
        break;
      case 'SymbolicLink':
        ClassType = LinkReader;
        break;
      case 'Socket':
        ClassType = require('./socket-reader');
        break;
      case null:
        ClassType = require('./proxy-reader');
        break;
    }
    if (!(self instanceof ClassType)) {
      return new ClassType(props);
    }
    Abstract.call(self);
    self.readable = true;
    self.writable = false;
    self.type = type;
    self.props = props;
    self.depth = props.depth = props.depth || 0;
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
    self.basename = props.basename = path.basename(self.path);
    self.dirname = props.dirname = path.dirname(self.path);
    props.parent = props.root = null;
    self.size = props.size;
    self.filter = typeof props.filter === 'function' ? props.filter : null;
    if (props.sort === 'alpha')
      props.sort = alphasort;
    self._stat(currentStat);
  }
  function alphasort(a, b) {
    return a === b ? 0 : a.toLowerCase() > b.toLowerCase() ? 1 : a.toLowerCase() < b.toLowerCase() ? -1 : a > b ? 1 : -1;
  }
  Reader.prototype._stat = function(currentStat) {
    var self = this;
    var props = self.props;
    var stat = props.follow ? 'stat' : 'lstat';
    if (currentStat)
      process.nextTick(statCb.bind(null, null, currentStat));
    else
      fs[stat](self._path, statCb);
    function statCb(er, props_) {
      if (er)
        return self.error(er);
      Object.keys(props_).forEach(function(k) {
        props[k] = props_[k];
      });
      if (undefined !== self.size && props.size !== self.size) {
        return self.error('incorrect size');
      }
      self.size = props.size;
      var type = getType(props);
      var handleHardlinks = props.hardlinks !== false;
      if (handleHardlinks && type !== 'Directory' && props.nlink && props.nlink > 1) {
        var k = props.dev + ':' + props.ino;
        if (hardLinks[k] === self._path || !hardLinks[k]) {
          hardLinks[k] = self._path;
        } else {
          type = self.type = self.props.type = 'Link';
          self.Link = self.props.Link = true;
          self.linkpath = self.props.linkpath = hardLinks[k];
          self._stat = self._read = LinkReader.prototype._read;
        }
      }
      if (self.type && self.type !== type) {
        self.error('Unexpected type: ' + type);
      }
      if (self.filter) {
        var who = self._proxy || self;
        if (!self.filter.call(who, who, props)) {
          if (!self._disowned) {
            self.abort();
            self.emit('end');
            self.emit('close');
          }
          return;
        }
      }
      var events = ['_stat', 'stat', 'ready'];
      var e = 0;
      ;
      (function go() {
        if (self._aborted) {
          self.emit('end');
          self.emit('close');
          return;
        }
        if (self._paused && self.type !== 'Directory') {
          self.once('resume', go);
          return;
        }
        var ev = events[e++];
        if (!ev) {
          return self._read();
        }
        self.emit(ev, props);
        go();
      })();
    }
  };
  Reader.prototype.pipe = function(dest) {
    var self = this;
    if (typeof dest.add === 'function') {
      self.on('entry', function(entry) {
        var ret = dest.add(entry);
        if (ret === false) {
          self.pause();
        }
      });
    }
    return Stream.prototype.pipe.apply(this, arguments);
  };
  Reader.prototype.pause = function(who) {
    this._paused = true;
    who = who || this;
    this.emit('pause', who);
    if (this._stream)
      this._stream.pause(who);
  };
  Reader.prototype.resume = function(who) {
    this._paused = false;
    who = who || this;
    this.emit('resume', who);
    if (this._stream)
      this._stream.resume(who);
    this._read();
  };
  Reader.prototype._read = function() {
    this.error('Cannot read unknown type: ' + this.type);
  };
})(require('process'));
