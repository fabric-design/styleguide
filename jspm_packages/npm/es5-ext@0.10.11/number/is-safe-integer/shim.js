/* */ 
'use strict';
var isInteger = require('../is-integer/shim'),
    maxValue = require('../max-safe-integer/index'),
    abs = Math.abs;
module.exports = function(value) {
  if (!isInteger(value))
    return false;
  return abs(value) <= maxValue;
};
