/* */ 
(function(process) {
  var exit = process.argv[2] || 0;
  var onSignalExit = require('../../index');
  onSignalExit(function(code, signal) {
    if (wanted[1] === true) {
      signal = !!signal;
    }
    console.log('%j', {
      found: [code, signal],
      wanted: wanted
    });
  });
  var wanted;
  if (isNaN(exit)) {
    switch (exit) {
      case 'SIGIOT':
      case 'SIGUNUSED':
      case 'SIGPOLL':
        wanted = [null, true];
        break;
      default:
        wanted = [null, exit];
        break;
    }
    try {
      process.kill(process.pid, exit);
      setTimeout(function() {}, 1000);
    } catch (er) {
      wanted = [0, null];
    }
  } else {
    exit = +exit;
    wanted = [exit, null];
    if (exit || process.argv[2]) {
      process.exit(exit);
    }
  }
})(require('process'));
