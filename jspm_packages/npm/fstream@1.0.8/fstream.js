/* */ 
exports.Abstract = require('./lib/abstract');
exports.Reader = require('./lib/reader');
exports.Writer = require('./lib/writer');
exports.File = {
  Reader: require('./lib/file-reader'),
  Writer: require('./lib/file-writer')
};
exports.Dir = {
  Reader: require('./lib/dir-reader'),
  Writer: require('./lib/dir-writer')
};
exports.Link = {
  Reader: require('./lib/link-reader'),
  Writer: require('./lib/link-writer')
};
exports.Proxy = {
  Reader: require('./lib/proxy-reader'),
  Writer: require('./lib/proxy-writer')
};
exports.Reader.Dir = exports.DirReader = exports.Dir.Reader;
exports.Reader.File = exports.FileReader = exports.File.Reader;
exports.Reader.Link = exports.LinkReader = exports.Link.Reader;
exports.Reader.Proxy = exports.ProxyReader = exports.Proxy.Reader;
exports.Writer.Dir = exports.DirWriter = exports.Dir.Writer;
exports.Writer.File = exports.FileWriter = exports.File.Writer;
exports.Writer.Link = exports.LinkWriter = exports.Link.Writer;
exports.Writer.Proxy = exports.ProxyWriter = exports.Proxy.Writer;
exports.collect = require('./lib/collect');
