/* */ 
(function(Buffer) {
  module.exports = FileReader;
  var fs = require('graceful-fs');
  var inherits = require('inherits');
  var Reader = require('./reader');
  var EOF = {EOF: true};
  var CLOSE = {CLOSE: true};
  inherits(FileReader, Reader);
  function FileReader(props) {
    var self = this;
    if (!(self instanceof FileReader)) {
      throw new Error('FileReader must be called as constructor.');
    }
    if (!((props.type === 'Link' && props.Link) || (props.type === 'File' && props.File))) {
      throw new Error('Non-file type ' + props.type);
    }
    self._buffer = [];
    self._bytesEmitted = 0;
    Reader.call(self, props);
  }
  FileReader.prototype._getStream = function() {
    var self = this;
    var stream = self._stream = fs.createReadStream(self._path, self.props);
    if (self.props.blksize) {
      stream.bufferSize = self.props.blksize;
    }
    stream.on('open', self.emit.bind(self, 'open'));
    stream.on('data', function(c) {
      self._bytesEmitted += c.length;
      if (!c.length) {
        return;
      } else if (self._paused || self._buffer.length) {
        self._buffer.push(c);
        self._read();
      } else
        self.emit('data', c);
    });
    stream.on('end', function() {
      if (self._paused || self._buffer.length) {
        self._buffer.push(EOF);
        self._read();
      } else {
        self.emit('end');
      }
      if (self._bytesEmitted !== self.props.size) {
        self.error("Didn't get expected byte count\n" + 'expect: ' + self.props.size + '\n' + 'actual: ' + self._bytesEmitted);
      }
    });
    stream.on('close', function() {
      if (self._paused || self._buffer.length) {
        self._buffer.push(CLOSE);
        self._read();
      } else {
        self.emit('close');
      }
    });
    stream.on('error', function(e) {
      self.emit('error', e);
    });
    self._read();
  };
  FileReader.prototype._read = function() {
    var self = this;
    if (self._paused) {
      return;
    }
    if (!self._stream) {
      return self._getStream();
    }
    if (self._buffer.length) {
      var buf = self._buffer;
      for (var i = 0,
          l = buf.length; i < l; i++) {
        var c = buf[i];
        if (c === EOF) {
          self.emit('end');
        } else if (c === CLOSE) {
          self.emit('close');
        } else {
          self.emit('data', c);
        }
        if (self._paused) {
          self._buffer = buf.slice(i);
          return;
        }
      }
      self._buffer.length = 0;
    }
  };
  FileReader.prototype.pause = function(who) {
    var self = this;
    if (self._paused)
      return;
    who = who || self;
    self._paused = true;
    if (self._stream)
      self._stream.pause();
    self.emit('pause', who);
  };
  FileReader.prototype.resume = function(who) {
    var self = this;
    if (!self._paused)
      return;
    who = who || self;
    self.emit('resume', who);
    self._paused = false;
    if (self._stream)
      self._stream.resume();
    self._read();
  };
})(require('buffer').Buffer);
