/* */ 
'use strict';
var callable = require('../../object/valid-callable'),
    aFrom = require('../../array/from/index'),
    defineLength = require('../_define-length'),
    apply = Function.prototype.apply;
module.exports = function() {
  var fn = callable(this),
      args = aFrom(arguments);
  return defineLength(function() {
    return apply.call(fn, this, args.concat(aFrom(arguments)));
  }, fn.length - args.length);
};
