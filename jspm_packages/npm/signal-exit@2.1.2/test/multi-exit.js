/* */ 
(function(process) {
  var exec = require('child_process').exec,
      t = require('tap');
  var fixture = require.resolve('./fixtures/change-code.js');
  var expect = require('./fixtures/change-code-expect.json!systemjs-json');
  function isZero10() {
    return /^v0\.10\..+$/.test(process.version);
  }
  var types = ['explicit', 'normal'];
  if (!isZero10())
    types.push('code');
  var codes = [0, 2, 'null'];
  var changes = ['nochange', 'change', 'twice'];
  if (!isZero10())
    changes.push('code', 'twicecode');
  var handlers = ['sigexit', 'nosigexit'];
  var opts = [];
  types.forEach(function(type) {
    var testCodes = type === 'normal' ? [0] : codes;
    testCodes.forEach(function(code) {
      changes.forEach(function(change) {
        handlers.forEach(function(handler) {
          opts.push([type, code, change, handler].join(' '));
        });
      });
    });
  });
  opts.forEach(function(opt) {
    t.test(opt, function(t) {
      var cmd = process.execPath + ' ' + fixture + ' ' + opt;
      exec(cmd, function(err, stdout, stderr) {
        var res = JSON.parse(stdout);
        if (err) {
          res.actualCode = err.code;
          res.actualSignal = err.signal;
        } else {
          res.actualCode = 0;
          res.actualSignal = null;
        }
        res.stderr = stderr.trim().split('\n');
        t.same(res, expect[opt]);
        t.end();
      });
    });
  });
})(require('process'));
