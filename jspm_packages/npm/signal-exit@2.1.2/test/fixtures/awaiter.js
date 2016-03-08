/* */ 
(function(process) {
  var expectSignal = process.argv[2];
  if (!expectSignal || !isNaN(expectSignal)) {
    throw new Error('signal not provided');
  }
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
  switch (expectSignal) {
    case 'SIGIOT':
    case 'SIGUNUSED':
    case 'SIGPOLL':
      wanted = [null, true];
      break;
    default:
      wanted = [null, expectSignal];
      break;
  }
  console.error('want', wanted);
  setTimeout(function() {}, 1000);
})(require('process'));
