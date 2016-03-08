/* */ 
var url = require('url');
module.exports = toNerfDart;
function toNerfDart(uri) {
  var parsed = url.parse(uri);
  parsed.pathname = "/";
  delete parsed.protocol;
  delete parsed.auth;
  return url.format(parsed);
}
