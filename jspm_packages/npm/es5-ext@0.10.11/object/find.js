/* */ 
'use strict';
var findKey = require('./find-key');
module.exports = function(obj, cb) {
  var key = findKey.apply(this, arguments);
  return (key == null) ? key : obj[key];
};
