/* */ 
'use strict';
var keys = require('./keys/index');
module.exports = function(obj) {
  return keys(obj).length;
};
