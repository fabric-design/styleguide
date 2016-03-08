/* */ 
(function(process) {
  module.exports = LinkWriter;
  var fs = require('graceful-fs');
  var Writer = require('./writer');
  var inherits = require('inherits');
  var path = require('path');
  var rimraf = require('rimraf');
  inherits(LinkWriter, Writer);
  function LinkWriter(props) {
    var self = this;
    if (!(self instanceof LinkWriter)) {
      throw new Error('LinkWriter must be called as constructor.');
    }
    if (!((props.type === 'Link' && props.Link) || (props.type === 'SymbolicLink' && props.SymbolicLink))) {
      throw new Error('Non-link type ' + props.type);
    }
    if (props.linkpath === '')
      props.linkpath = '.';
    if (!props.linkpath) {
      self.error('Need linkpath property to create ' + props.type);
    }
    Writer.call(this, props);
  }
  LinkWriter.prototype._create = function() {
    var self = this;
    var hard = self.type === 'Link' || process.platform === 'win32';
    var link = hard ? 'link' : 'symlink';
    var lp = hard ? path.resolve(self.dirname, self.linkpath) : self.linkpath;
    if (hard)
      return clobber(self, lp, link);
    fs.readlink(self._path, function(er, p) {
      if (p && p === lp)
        return finish(self);
      clobber(self, lp, link);
    });
  };
  function clobber(self, lp, link) {
    rimraf(self._path, function(er) {
      if (er)
        return self.error(er);
      create(self, lp, link);
    });
  }
  function create(self, lp, link) {
    fs[link](lp, self._path, function(er) {
      if (er) {
        if ((er.code === 'ENOENT' || er.code === 'EACCES' || er.code === 'EPERM') && process.platform === 'win32') {
          self.ready = true;
          self.emit('ready');
          self.emit('end');
          self.emit('close');
          self.end = self._finish = function() {};
        } else
          return self.error(er);
      }
      finish(self);
    });
  }
  function finish(self) {
    self.ready = true;
    self.emit('ready');
    if (self._ended && !self._finished)
      self._finish();
  }
  LinkWriter.prototype.end = function() {
    this._ended = true;
    if (this.ready) {
      this._finished = true;
      this._finish();
    }
  };
})(require('process'));
