/* */ 
(function(process) {
  module.exports = ['SIGABRT', 'SIGALRM', 'SIGBUS', 'SIGFPE', 'SIGHUP', 'SIGILL', 'SIGINT', 'SIGIOT', 'SIGPIPE', 'SIGPROF', 'SIGQUIT', 'SIGSEGV', 'SIGSYS', 'SIGTERM', 'SIGTRAP', 'SIGUSR2', 'SIGVTALRM', 'SIGXCPU', 'SIGXFSZ'];
  if (process.platform === 'linux') {
    module.exports.push('SIGIO', 'SIGPOLL', 'SIGPWR', 'SIGSTKFLT', 'SIGUNUSED');
  }
})(require('process'));
