/* */ 
'use strict';
var toPosInt = require('../../number/to-pos-integer');
module.exports = function(a, b) {
  return toPosInt(a.length) - toPosInt(b.length);
};
