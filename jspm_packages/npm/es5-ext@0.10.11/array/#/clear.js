/* */ 
'use strict';
var value = require('../../object/valid-value');
module.exports = function() {
  value(this).length = 0;
  return this;
};
