/* */ 
'use strict';
var toInteger = require('../../../number/to-integer'),
    validValue = require('../../../object/valid-value');
module.exports = function(pos) {
  var str = String(validValue(this)),
      l = str.length,
      first,
      second;
  pos = toInteger(pos);
  if (pos < 0 || pos >= l)
    return undefined;
  first = str.charCodeAt(pos);
  if ((first >= 0xD800) && (first <= 0xDBFF) && (l > pos + 1)) {
    second = str.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
};
