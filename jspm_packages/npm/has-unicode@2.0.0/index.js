/* */ 
(function(process) {
  "use strict";
  var os = require('os');
  var hasUnicode = module.exports = function() {
    if (os.type() == "Windows_NT") {
      return false;
    }
    var isUTF8 = /[.]UTF-8/;
    if (isUTF8.test(process.env.LC_ALL) || process.env.LC_CTYPE == 'UTF-8' || isUTF8.test(process.env.LANG)) {
      return true;
    }
    return false;
  };
})(require('process'));
