/* */ 
'use strict';
var toPosInt = require('../../number/to-pos-integer'),
    value = require('../../object/valid-value'),
    lastIndexOf = Array.prototype.lastIndexOf,
    hasOwnProperty = Object.prototype.hasOwnProperty,
    abs = Math.abs,
    floor = Math.floor;
module.exports = function(searchElement) {
  var i,
      fromIndex,
      val;
  if (searchElement === searchElement) {
    return lastIndexOf.apply(this, arguments);
  }
  value(this);
  fromIndex = arguments[1];
  if (isNaN(fromIndex))
    fromIndex = (toPosInt(this.length) - 1);
  else if (fromIndex >= 0)
    fromIndex = floor(fromIndex);
  else
    fromIndex = toPosInt(this.length) - floor(abs(fromIndex));
  for (i = fromIndex; i >= 0; --i) {
    if (hasOwnProperty.call(this, i)) {
      val = this[i];
      if (val !== val)
        return i;
    }
  }
  return -1;
};
