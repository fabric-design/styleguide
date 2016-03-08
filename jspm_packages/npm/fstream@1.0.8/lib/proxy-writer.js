/* */ 
module.exports = ProxyWriter;
var Writer = require('./writer');
var getType = require('./get-type');
var inherits = require('inherits');
var collect = require('./collect');
var fs = require('fs');
inherits(ProxyWriter, Writer);
function ProxyWriter(props) {
  var self = this;
  if (!(self instanceof ProxyWriter)) {
    throw new Error('ProxyWriter must be called as constructor.');
  }
  self.props = props;
  self._needDrain = false;
  Writer.call(self, props);
}
ProxyWriter.prototype._stat = function() {
  var self = this;
  var props = self.props;
  var stat = props.follow ? 'stat' : 'lstat';
  fs[stat](props.path, function(er, current) {
    var type;
    if (er || !current) {
      type = 'File';
    } else {
      type = getType(current);
    }
    props[type] = true;
    props.type = self.type = type;
    self._old = current;
    self._addProxy(Writer(props, current));
  });
};
ProxyWriter.prototype._addProxy = function(proxy) {
  var self = this;
  if (self._proxy) {
    return self.error('proxy already set');
  }
  self._proxy = proxy;
  ;
  ['ready', 'error', 'close', 'pipe', 'drain', 'warn'].forEach(function(ev) {
    proxy.on(ev, self.emit.bind(self, ev));
  });
  self.emit('proxy', proxy);
  var calls = self._buffer;
  calls.forEach(function(c) {
    proxy[c[0]].apply(proxy, c[1]);
  });
  self._buffer.length = 0;
  if (self._needsDrain)
    self.emit('drain');
};
ProxyWriter.prototype.add = function(entry) {
  collect(entry);
  if (!this._proxy) {
    this._buffer.push(['add', [entry]]);
    this._needDrain = true;
    return false;
  }
  return this._proxy.add(entry);
};
ProxyWriter.prototype.write = function(c) {
  if (!this._proxy) {
    this._buffer.push(['write', [c]]);
    this._needDrain = true;
    return false;
  }
  return this._proxy.write(c);
};
ProxyWriter.prototype.end = function(c) {
  if (!this._proxy) {
    this._buffer.push(['end', [c]]);
    return false;
  }
  return this._proxy.end(c);
};
