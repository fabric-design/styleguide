/* */ 
'use strict';
var assign = require('./assign/index'),
    value = require('./valid-value');
module.exports = function(obj) {
  var copy = Object(value(obj));
  if (copy !== obj)
    return copy;
  return assign({}, obj);
};
