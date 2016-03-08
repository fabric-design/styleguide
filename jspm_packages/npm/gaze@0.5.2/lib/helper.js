/* */ 
(function(process) {
  'use strict';
  var path = require('path');
  var helper = module.exports = {};
  helper.isDir = function isDir(dir) {
    if (typeof dir !== 'string') {
      return false;
    }
    return (dir.slice(-(path.sep.length)) === path.sep);
  };
  helper.objectPush = function objectPush(obj, key, val) {
    if (obj[key] == null) {
      obj[key] = [];
    }
    if (Array.isArray(val)) {
      obj[key] = obj[key].concat(val);
    } else if (val) {
      obj[key].push(val);
    }
    return obj[key] = helper.unique(obj[key]);
  };
  helper.markDir = function markDir(dir) {
    if (typeof dir === 'string' && dir.slice(-(path.sep.length)) !== path.sep && dir !== '.') {
      dir += path.sep;
    }
    return dir;
  };
  helper.unixifyPathSep = function unixifyPathSep(filepath) {
    return (process.platform === 'win32') ? String(filepath).replace(/\\/g, '/') : filepath;
  };
  helper.unique = function unique() {
    var array = Array.prototype.concat.apply(Array.prototype, arguments);
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (result.indexOf(array[i]) === -1) {
        result.push(array[i]);
      }
    }
    return result;
  };
  helper.forEachSeries = function forEachSeries(arr, iterator, callback) {
    if (!arr.length) {
      return callback();
    }
    var completed = 0;
    var iterate = function() {
      iterator(arr[completed], function(err) {
        if (err) {
          callback(err);
          callback = function() {};
        } else {
          completed += 1;
          if (completed === arr.length) {
            callback(null);
          } else {
            iterate();
          }
        }
      });
    };
    iterate();
  };
})(require('process'));
