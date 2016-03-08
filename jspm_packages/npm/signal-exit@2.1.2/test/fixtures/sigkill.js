/* */ 
(function(process) {
  Object.defineProperty(process, 'platform', {
    value: 'linux',
    writable: false,
    enumerable: true,
    configurable: true
  });
  var signals = require('../../signals');
  signals.push('SIGKILL');
  var onSignalExit = require('../../index');
  onSignalExit.load();
})(require('process'));
