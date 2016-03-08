/* */ 
'use strict';
var callable = require('../../object/valid-callable'),
    value = require('../../object/valid-value'),
    forEach = Array.prototype.forEach,
    apply = Function.prototype.apply;
module.exports = function(cb) {
  var r;
  (value(this) && callable(cb));
  r = {};
  forEach.call(this, function(v) {
    var key = apply.call(cb, this, arguments);
    if (!r.hasOwnProperty(key))
      r[key] = [];
    r[key].push(v);
  }, arguments[1]);
  return r;
};
