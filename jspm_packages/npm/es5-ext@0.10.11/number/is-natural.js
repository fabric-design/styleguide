/* */ 
'use strict';
var isInteger = require('./is-integer/index');
module.exports = function(num) {
  return isInteger(num) && (num >= 0);
};
