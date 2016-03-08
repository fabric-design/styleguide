/* */ 
module.exports = LinkReader;
var fs = require('graceful-fs');
var inherits = require('inherits');
var Reader = require('./reader');
inherits(LinkReader, Reader);
function LinkReader(props) {
  var self = this;
  if (!(self instanceof LinkReader)) {
    throw new Error('LinkReader must be called as constructor.');
  }
  if (!((props.type === 'Link' && props.Link) || (props.type === 'SymbolicLink' && props.SymbolicLink))) {
    throw new Error('Non-link type ' + props.type);
  }
  Reader.call(self, props);
}
LinkReader.prototype._stat = function(currentStat) {
  var self = this;
  fs.readlink(self._path, function(er, linkpath) {
    if (er)
      return self.error(er);
    self.linkpath = self.props.linkpath = linkpath;
    self.emit('linkpath', linkpath);
    Reader.prototype._stat.call(self, currentStat);
  });
};
LinkReader.prototype._read = function() {
  var self = this;
  if (self._paused)
    return;
  if (!self._ended) {
    self.emit('end');
    self.emit('close');
    self._ended = true;
  }
};
