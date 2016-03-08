/* */ 
(function(process) {
  var cp = require('child_process');
  var parse = require('./lib/parse');
  var enoent = require('./lib/enoent');
  function spawn(command, args, options) {
    var parsed;
    var spawned;
    parsed = parse(command, args, options);
    spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
    enoent.hookChildProcess(spawned, parsed);
    return spawned;
  }
  module.exports = spawn;
  module.exports.spawn = spawn;
  module.exports._parse = parse;
  module.exports._enoent = enoent;
})(require('process'));
