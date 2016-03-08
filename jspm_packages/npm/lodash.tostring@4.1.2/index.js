/* */ 
(function(process) {
  var INFINITY = 1 / 0;
  var symbolTag = '[object Symbol]';
  var objectTypes = {
    'function': true,
    'object': true
  };
  var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : undefined;
  var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : undefined;
  var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
  var freeSelf = checkGlobal(objectTypes[typeof self] && self);
  var freeWindow = checkGlobal(objectTypes[typeof window] && window);
  var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
  var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();
  function checkGlobal(value) {
    return (value && value.Object === Object) ? value : null;
  }
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  var Symbol = root.Symbol;
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  function isSymbol(value) {
    return typeof value == 'symbol' || (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }
  function toString(value) {
    if (typeof value == 'string') {
      return value;
    }
    if (value == null) {
      return '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }
  module.exports = toString;
})(require('process'));
