/* */ 
(function(Buffer, process) {
  var fs = require('fs');
  var LRU = require('lru-cache');
  var resolveCommand = require('./resolveCommand');
  var mixIn = require('./util/mixIn');
  var isWin = process.platform === 'win32';
  var shebangCache = LRU({
    max: 50,
    maxAge: 30 * 1000
  });
  function readShebang(command) {
    var buffer;
    var fd;
    var match;
    var shebang;
    if (shebangCache.has(command)) {
      return shebangCache.get(command);
    }
    buffer = new Buffer(150);
    try {
      fd = fs.openSync(command, 'r');
      fs.readSync(fd, buffer, 0, 150, 0);
      fs.closeSync(fd);
    } catch (e) {}
    match = buffer.toString().trim().match(/\#\!(.+)/i);
    if (match) {
      shebang = match[1].replace(/\/usr\/bin\/env\s+/i, '');
    }
    shebangCache.set(command, shebang);
    return shebang;
  }
  function escapeArg(arg, quote) {
    arg = '' + arg;
    if (!quote) {
      arg = arg.replace(/([\(\)%!\^<>&|;,"' ])/g, '^$1');
    } else {
      arg = arg.replace(/(\\*)"/gi, '$1$1\\"');
      arg = arg.replace(/(\\*)$/, '$1$1');
      arg = '"' + arg + '"';
    }
    return arg;
  }
  function escapeCommand(command) {
    return /^[a-z0-9_-]+$/i.test(command) ? command : escapeArg(command, true);
  }
  function parseCall(command, args, options) {
    var shebang;
    var applyQuotes;
    var file;
    var original;
    if (args && !Array.isArray(args)) {
      options = args;
      args = null;
    }
    args = args ? args.slice(0) : [];
    options = mixIn({}, options);
    original = command;
    if (isWin) {
      file = resolveCommand(command);
      file = file || resolveCommand(command, true);
      shebang = file && readShebang(file);
      if (shebang) {
        args.unshift(file);
        command = shebang;
      }
      applyQuotes = command !== 'echo';
      command = escapeCommand(command);
      args = args.map(function(arg) {
        return escapeArg(arg, applyQuotes);
      });
      args = ['/s', '/c', '"' + command + (args.length ? ' ' + args.join(' ') : '') + '"'];
      command = process.env.comspec || 'cmd.exe';
      options.windowsVerbatimArguments = true;
    }
    return {
      command: command,
      args: args,
      options: options,
      file: file,
      original: original
    };
  }
  module.exports = parseCall;
})(require('buffer').Buffer, require('process'));
