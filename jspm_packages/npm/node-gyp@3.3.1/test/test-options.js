/* */ 
(function(process) {
  'use strict';
  var test = require('tape');
  var gyp = require('../lib/node-gyp');
  test('options in environment', function(t) {
    t.plan(1);
    Object.keys(process.env).filter(function(key) {
      return /^npm_config_/.test(key);
    }).forEach(function(key) {
      delete process.env[key];
    });
    process.env.npm_config_ = '42';
    process.env.npm_config_x = '42';
    process.env.npm_config_loglevel = 'debug';
    var g = gyp();
    g.parseArgv(['rebuild']);
    t.deepEqual(Object.keys(g.opts).sort(), ['argv', 'x']);
  });
})(require('process'));
