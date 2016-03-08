/* */ 
(function(process) {
  'use strict';
  var isWin = process.platform === 'win32';
  function notFoundError(command, syscall) {
    var err;
    err = new Error(syscall + ' ' + command + ' ENOENT');
    err.code = err.errno = 'ENOENT';
    err.syscall = syscall + ' ' + command;
    return err;
  }
  function hookChildProcess(cp, parsed) {
    var originalEmit;
    if (!isWin) {
      return;
    }
    originalEmit = cp.emit;
    cp.emit = function(name, arg1) {
      var err;
      if (name === 'exit') {
        err = verifyENOENT(arg1, parsed, 'spawn');
        if (err) {
          return originalEmit.call(cp, 'error', err);
        }
      }
      return originalEmit.apply(cp, arguments);
    };
  }
  function verifyENOENT(status, parsed, syscall) {
    if (isWin && status === 1 && !parsed.file) {
      return notFoundError(parsed.original, syscall);
    }
    return null;
  }
  module.exports.hookChildProcess = hookChildProcess;
  module.exports.verifyENOENT = verifyENOENT;
  module.exports.notFoundError = notFoundError;
})(require('process'));
