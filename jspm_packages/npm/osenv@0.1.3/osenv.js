/* */ 
(function(process) {
  var isWindows = process.platform === 'win32';
  var path = require('path');
  var exec = require('child_process').exec;
  var osTmpdir = require('os-tmpdir');
  var osHomedir = require('os-homedir');
  function memo(key, lookup, fallback) {
    var fell = false;
    var falling = false;
    exports[key] = function(cb) {
      var val = lookup();
      if (!val && !fell && !falling && fallback) {
        fell = true;
        falling = true;
        exec(fallback, function(er, output, stderr) {
          falling = false;
          if (er)
            return;
          val = output.trim();
        });
      }
      exports[key] = function(cb) {
        if (cb)
          process.nextTick(cb.bind(null, null, val));
        return val;
      };
      if (cb && !falling)
        process.nextTick(cb.bind(null, null, val));
      return val;
    };
  }
  memo('user', function() {
    return (isWindows ? process.env.USERDOMAIN + '\\' + process.env.USERNAME : process.env.USER);
  }, 'whoami');
  memo('prompt', function() {
    return isWindows ? process.env.PROMPT : process.env.PS1;
  });
  memo('hostname', function() {
    return isWindows ? process.env.COMPUTERNAME : process.env.HOSTNAME;
  }, 'hostname');
  memo('tmpdir', function() {
    return osTmpdir();
  });
  memo('home', function() {
    return osHomedir();
  });
  memo('path', function() {
    return (process.env.PATH || process.env.Path || process.env.path).split(isWindows ? ';' : ':');
  });
  memo('editor', function() {
    return process.env.EDITOR || process.env.VISUAL || (isWindows ? 'notepad.exe' : 'vi');
  });
  memo('shell', function() {
    return isWindows ? process.env.ComSpec || 'cmd' : process.env.SHELL || 'bash';
  });
})(require('process'));
