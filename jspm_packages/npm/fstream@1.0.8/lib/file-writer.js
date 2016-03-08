/* */ 
(function(Buffer) {
  module.exports = FileWriter;
  var fs = require('graceful-fs');
  var Writer = require('./writer');
  var inherits = require('inherits');
  var EOF = {};
  inherits(FileWriter, Writer);
  function FileWriter(props) {
    var self = this;
    if (!(self instanceof FileWriter)) {
      throw new Error('FileWriter must be called as constructor.');
    }
    if (props.type !== 'File' || !props.File) {
      throw new Error('Non-file type ' + props.type);
    }
    self._buffer = [];
    self._bytesWritten = 0;
    Writer.call(this, props);
  }
  FileWriter.prototype._create = function() {
    var self = this;
    if (self._stream)
      return;
    var so = {};
    if (self.props.flags)
      so.flags = self.props.flags;
    so.mode = Writer.filemode;
    if (self._old && self._old.blksize)
      so.bufferSize = self._old.blksize;
    self._stream = fs.createWriteStream(self._path, so);
    self._stream.on('open', function() {
      self.ready = true;
      self._buffer.forEach(function(c) {
        if (c === EOF)
          self._stream.end();
        else
          self._stream.write(c);
      });
      self.emit('ready');
      self.emit('drain');
    });
    self._stream.on('error', function(er) {
      self.emit('error', er);
    });
    self._stream.on('drain', function() {
      self.emit('drain');
    });
    self._stream.on('close', function() {
      self._finish();
    });
  };
  FileWriter.prototype.write = function(c) {
    var self = this;
    self._bytesWritten += c.length;
    if (!self.ready) {
      if (!Buffer.isBuffer(c) && typeof c !== 'string') {
        throw new Error('invalid write data');
      }
      self._buffer.push(c);
      return false;
    }
    var ret = self._stream.write(c);
    if (ret === false && self._stream._queue) {
      return self._stream._queue.length <= 2;
    } else {
      return ret;
    }
  };
  FileWriter.prototype.end = function(c) {
    var self = this;
    if (c)
      self.write(c);
    if (!self.ready) {
      self._buffer.push(EOF);
      return false;
    }
    return self._stream.end();
  };
  FileWriter.prototype._finish = function() {
    var self = this;
    if (typeof self.size === 'number' && self._bytesWritten !== self.size) {
      self.error('Did not get expected byte count.\n' + 'expect: ' + self.size + '\n' + 'actual: ' + self._bytesWritten);
    }
    Writer.prototype._finish.call(self);
  };
})(require('buffer').Buffer);
