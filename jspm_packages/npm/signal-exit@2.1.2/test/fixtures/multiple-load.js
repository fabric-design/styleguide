/* */ 
(function(process) {
  var onSignalExit = require('../../index');
  var counter = 0;
  onSignalExit(function(code, signal) {
    counter++;
    console.log('last counter=%j, code=%j, signal=%j', counter, code, signal);
  }, {alwaysLast: true});
  onSignalExit(function(code, signal) {
    counter++;
    console.log('first counter=%j, code=%j, signal=%j', counter, code, signal);
  });
  delete require('module')._cache[require.resolve('../../')];
  var onSignalExit = require('../../index');
  onSignalExit(function(code, signal) {
    counter++;
    console.log('last counter=%j, code=%j, signal=%j', counter, code, signal);
  }, {alwaysLast: true});
  onSignalExit(function(code, signal) {
    counter++;
    console.log('first counter=%j, code=%j, signal=%j', counter, code, signal);
  });
  delete require('module')._cache[require.resolve('../../')];
  var onSignalExit = require('../../index');
  var unwrap = onSignalExit(function(code, signal) {
    counter++;
    console.log('last counter=%j, code=%j, signal=%j', counter, code, signal);
  }, {alwaysLast: true});
  unwrap();
  unwrap = onSignalExit(function(code, signal) {
    counter++;
    console.log('first counter=%j, code=%j, signal=%j', counter, code, signal);
  });
  unwrap();
  process.kill(process.pid, 'SIGHUP');
  setTimeout(function() {}, 1000);
})(require('process'));
