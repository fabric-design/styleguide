/* */ 
module.exports = SocketReader;
var inherits = require('inherits');
var Reader = require('./reader');
inherits(SocketReader, Reader);
function SocketReader(props) {
  var self = this;
  if (!(self instanceof SocketReader)) {
    throw new Error('SocketReader must be called as constructor.');
  }
  if (!(props.type === 'Socket' && props.Socket)) {
    throw new Error('Non-socket type ' + props.type);
  }
  Reader.call(self, props);
}
SocketReader.prototype._read = function() {
  var self = this;
  if (self._paused)
    return;
  if (!self._ended) {
    self.emit('end');
    self.emit('close');
    self._ended = true;
  }
};
