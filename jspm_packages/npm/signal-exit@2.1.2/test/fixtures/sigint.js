/* */ 
(function(process) {
  var onSignalExit = require('../../index');
  onSignalExit(function(code, signal) {
    console.log('exited with sigint, ' + code + ', ' + signal);
  });
  setTimeout(function() {}, 1000);
  process.kill(process.pid, 'SIGINT');
})(require('process'));
