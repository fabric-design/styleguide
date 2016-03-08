/* */ 
'use strict';
var callable = require('../../object/valid-callable'),
    aFrom = require('../../array/from/index'),
    apply = Function.prototype.apply,
    call = Function.prototype.call,
    callFn = function(arg, fn) {
      return call.call(fn, this, arg);
    };
module.exports = function(fn) {
  var fns,
      first;
  if (!fn)
    callable(fn);
  fns = [this].concat(aFrom(arguments));
  fns.forEach(callable);
  fns = fns.reverse();
  first = fns[0];
  fns = fns.slice(1);
  return function(arg) {
    return fns.reduce(callFn, apply.call(first, this, arguments));
  };
};
