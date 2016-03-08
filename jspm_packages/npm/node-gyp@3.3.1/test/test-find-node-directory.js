/* */ 
(function(process) {
  var test = require('tape');
  var path = require('path');
  var findNodeDirectory = require('../lib/find-node-directory');
  var platforms = ['darwin', 'freebsd', 'linux', 'sunos', 'win32', 'aix'];
  test('test find-node-directory - node install', function(t) {
    t.plan(platforms.length);
    for (var next = 0; next < platforms.length; next++) {
      var processObj = {
        execPath: '/x/y/bin/node',
        platform: platforms[next]
      };
      t.equal(findNodeDirectory('/x/deps/npm/node_modules/node-gyp/lib', processObj), path.join('/x'));
    }
  });
  test('test find-node-directory - node build', function(t) {
    t.plan(platforms.length);
    for (var next = 0; next < platforms.length; next++) {
      var processObj = {
        execPath: '/x/y/bin/node',
        platform: platforms[next]
      };
      if (platforms[next] === 'win32') {
        t.equal(findNodeDirectory('/y/node_modules/npm/node_modules/node-gyp/lib', processObj), path.join('/y'));
      } else {
        t.equal(findNodeDirectory('/y/lib/node_modules/npm/node_modules/node-gyp/lib', processObj), path.join('/y'));
      }
    }
  });
  test('test find-node-directory - node in bin directory', function(t) {
    t.plan(platforms.length);
    for (var next = 0; next < platforms.length; next++) {
      var processObj = {
        execPath: '/x/y/bin/node',
        platform: platforms[next]
      };
      t.equal(findNodeDirectory('/nothere/npm/node_modules/node-gyp/lib', processObj), path.join('/x/y'));
    }
  });
  test('test find-node-directory - node in build release dir', function(t) {
    t.plan(platforms.length);
    for (var next = 0; next < platforms.length; next++) {
      var processObj;
      if (platforms[next] === 'win32') {
        processObj = {
          execPath: '/x/y/Release/node',
          platform: platforms[next]
        };
      } else {
        processObj = {
          execPath: '/x/y/out/Release/node',
          platform: platforms[next]
        };
      }
      t.equal(findNodeDirectory('/nothere/npm/node_modules/node-gyp/lib', processObj), path.join('/x/y'));
    }
  });
  test('test find-node-directory - node in Debug release dir', function(t) {
    t.plan(platforms.length);
    for (var next = 0; next < platforms.length; next++) {
      var processObj;
      if (platforms[next] === 'win32') {
        processObj = {
          execPath: '/a/b/Debug/node',
          platform: platforms[next]
        };
      } else {
        processObj = {
          execPath: '/a/b/out/Debug/node',
          platform: platforms[next]
        };
      }
      t.equal(findNodeDirectory('/nothere/npm/node_modules/node-gyp/lib', processObj), path.join('/a/b'));
    }
  });
  test('test find-node-directory - not found', function(t) {
    t.plan(platforms.length);
    for (var next = 0; next < platforms.length; next++) {
      var processObj = {
        execPath: '/x/y/z/y',
        platform: next
      };
      t.equal(findNodeDirectory('/a/b/c/d', processObj), '');
    }
  });
  test('test find-node-directory - node install', function(t) {
    t.plan(platforms.length);
    for (var next = 0; next < platforms.length; next++) {
      var processObj = {
        execPath: '/x/y/bin/node',
        platform: platforms[next]
      };
      t.equal(findNodeDirectory('/x/y/z/a/b/c/deps/npm/node_modules/node-gyp/lib', processObj), path.join('/x/y/z/a/b/c'));
    }
  });
})(require('process'));
