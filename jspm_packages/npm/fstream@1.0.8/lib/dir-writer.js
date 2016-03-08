/* */ 
module.exports = DirWriter;
var Writer = require('./writer');
var inherits = require('inherits');
var mkdir = require('mkdirp');
var path = require('path');
var collect = require('./collect');
inherits(DirWriter, Writer);
function DirWriter(props) {
  var self = this;
  if (!(self instanceof DirWriter)) {
    self.error('DirWriter must be called as constructor.', null, true);
  }
  if (props.type !== 'Directory' || !props.Directory) {
    self.error('Non-directory type ' + props.type + ' ' + JSON.stringify(props), null, true);
  }
  Writer.call(this, props);
}
DirWriter.prototype._create = function() {
  var self = this;
  mkdir(self._path, Writer.dirmode, function(er) {
    if (er)
      return self.error(er);
    self.ready = true;
    self.emit('ready');
    self._process();
  });
};
DirWriter.prototype.write = function() {
  return true;
};
DirWriter.prototype.end = function() {
  this._ended = true;
  this._process();
};
DirWriter.prototype.add = function(entry) {
  var self = this;
  collect(entry);
  if (!self.ready || self._currentEntry) {
    self._buffer.push(entry);
    return false;
  }
  if (self._ended) {
    return self.error('add after end');
  }
  self._buffer.push(entry);
  self._process();
  return this._buffer.length === 0;
};
DirWriter.prototype._process = function() {
  var self = this;
  if (self._processing)
    return;
  var entry = self._buffer.shift();
  if (!entry) {
    self.emit('drain');
    if (self._ended)
      self._finish();
    return;
  }
  self._processing = true;
  self.emit('entry', entry);
  var p = entry;
  var pp;
  do {
    pp = p._path || p.path;
    if (pp === self.root._path || pp === self._path || (pp && pp.indexOf(self._path) === 0)) {
      self._processing = false;
      if (entry._collected)
        entry.pipe();
      return self._process();
    }
    p = p.parent;
  } while (p);
  var props = {
    parent: self,
    root: self.root || self,
    type: entry.type,
    depth: self.depth + 1
  };
  pp = entry._path || entry.path || entry.props.path;
  if (entry.parent) {
    pp = pp.substr(entry.parent._path.length + 1);
  }
  props.path = path.join(self.path, path.join('/', pp));
  props.filter = self.filter;
  Object.keys(entry.props).forEach(function(k) {
    if (!props.hasOwnProperty(k)) {
      props[k] = entry.props[k];
    }
  });
  var child = self._currentChild = new Writer(props);
  child.on('ready', function() {
    entry.pipe(child);
    entry.resume();
  });
  child.on('error', function(er) {
    if (child._swallowErrors) {
      self.warn(er);
      child.emit('end');
      child.emit('close');
    } else {
      self.emit('error', er);
    }
  });
  child.on('close', onend);
  var ended = false;
  function onend() {
    if (ended)
      return;
    ended = true;
    self._currentChild = null;
    self._processing = false;
    self._process();
  }
};
