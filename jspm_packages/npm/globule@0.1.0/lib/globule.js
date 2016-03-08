/* */ 
(function(process) {
  'use strict';
  var fs = require('fs');
  var path = require('path');
  var _ = require('lodash');
  var glob = require('glob');
  var minimatch = require('minimatch');
  var globule = exports;
  function processPatterns(patterns, fn) {
    return _.flatten(patterns).reduce(function(result, pattern) {
      if (pattern.indexOf('!') === 0) {
        pattern = pattern.slice(1);
        return _.difference(result, fn(pattern));
      } else {
        return _.union(result, fn(pattern));
      }
    }, []);
  }
  globule.match = function(patterns, filepaths, options) {
    if (patterns == null || filepaths == null) {
      return [];
    }
    if (!_.isArray(patterns)) {
      patterns = [patterns];
    }
    if (!_.isArray(filepaths)) {
      filepaths = [filepaths];
    }
    if (patterns.length === 0 || filepaths.length === 0) {
      return [];
    }
    return processPatterns(patterns, function(pattern) {
      return minimatch.match(filepaths, pattern, options || {});
    });
  };
  globule.isMatch = function() {
    return globule.match.apply(null, arguments).length > 0;
  };
  globule.find = function() {
    var args = _.toArray(arguments);
    var options = _.isPlainObject(args[args.length - 1]) ? args.pop() : {};
    var patterns = _.isArray(args[0]) ? args[0] : args;
    if (patterns.length === 0) {
      return [];
    }
    var srcBase = options.srcBase || options.cwd;
    var globOptions = _.extend({}, options);
    if (srcBase) {
      globOptions.cwd = srcBase;
    }
    var matches = processPatterns(patterns, function(pattern) {
      return glob.sync(pattern, globOptions);
    });
    if (srcBase && options.prefixBase) {
      matches = matches.map(function(filepath) {
        return path.join(srcBase, filepath);
      });
    }
    if (options.filter) {
      matches = matches.filter(function(filepath) {
        if (srcBase && !options.prefixBase) {
          filepath = path.join(srcBase, filepath);
        }
        try {
          if (_.isFunction(options.filter)) {
            return options.filter(filepath, options);
          } else {
            return fs.statSync(filepath)[options.filter]();
          }
        } catch (err) {
          return false;
        }
      });
    }
    return matches;
  };
  var pathSeparatorRe = /[\/\\]/g;
  var extDotRe = {
    first: /(\.[^\/]*)?$/,
    last: /(\.[^\/\.]*)?$/
  };
  function rename(dest, options) {
    if (options.flatten) {
      dest = path.basename(dest);
    }
    if (options.ext) {
      dest = dest.replace(extDotRe[options.extDot], options.ext);
    }
    if (options.destBase) {
      dest = path.join(options.destBase, dest);
    }
    return dest;
  }
  globule.mapping = function(filepaths, options) {
    if (filepaths == null) {
      return [];
    }
    options = _.defaults({}, options, {
      extDot: 'first',
      rename: rename
    });
    var files = [];
    var fileByDest = {};
    filepaths.forEach(function(src) {
      var dest = options.rename(src, options);
      if (options.srcBase) {
        src = path.join(options.srcBase, src);
      }
      dest = dest.replace(pathSeparatorRe, '/');
      src = src.replace(pathSeparatorRe, '/');
      if (fileByDest[dest]) {
        fileByDest[dest].src.push(src);
      } else {
        files.push({
          src: [src],
          dest: dest
        });
        fileByDest[dest] = files[files.length - 1];
      }
    });
    return files;
  };
  globule.findMapping = function(patterns, options) {
    return globule.mapping(globule.find(patterns, options), options);
  };
})(require('process'));
