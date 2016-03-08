/* */ 
(function(process) {
  'use strict';
  var fs = require('fs');
  var path = require('path');
  var _ = require('lodash');
  var glob = require('glob');
  var parseImports = require('./parse-imports');
  function resolveSassPath(sassPath, loadPaths, extensions) {
    var re = new RegExp('(\.(' + extensions.join('|') + '))$', 'i');
    var sassPathName = sassPath.replace(re, '');
    var i,
        j,
        length = loadPaths.length,
        scssPath,
        partialPath;
    for (i = 0; i < length; i++) {
      for (j = 0; j < extensions.length; j++) {
        scssPath = path.normalize(loadPaths[i] + '/' + sassPathName + '.' + extensions[j]);
        if (fs.existsSync(scssPath) && fs.lstatSync(scssPath).isFile()) {
          return scssPath;
        }
      }
      for (j = 0; j < extensions.length; j++) {
        scssPath = path.normalize(loadPaths[i] + '/' + sassPathName + '.' + extensions[j]);
        partialPath = path.join(path.dirname(scssPath), '_' + path.basename(scssPath));
        if (fs.existsSync(partialPath) && fs.lstatSync(partialPath).isFile()) {
          return partialPath;
        }
      }
    }
    return false;
  }
  function Graph(options, dir) {
    this.dir = dir;
    this.loadPaths = options.loadPaths || [];
    this.extensions = options.extensions || [];
    this.index = {};
    if (dir) {
      var graph = this;
      _.each(glob.sync(dir + '/**/*.@(' + this.extensions.join('|') + ')', {
        dot: true,
        nodir: true
      }), function(file) {
        graph.addFile(path.resolve(file));
      });
    }
  }
  Graph.prototype.addFile = function(filepath, parent) {
    var entry = this.index[filepath] = this.index[filepath] || {
      imports: [],
      importedBy: [],
      modified: fs.statSync(filepath).mtime
    };
    var resolvedParent;
    var imports = parseImports(fs.readFileSync(filepath, 'utf-8'));
    var cwd = path.dirname(filepath);
    var i,
        length = imports.length,
        loadPaths,
        resolved;
    for (i = 0; i < length; i++) {
      loadPaths = _([cwd, this.dir]).concat(this.loadPaths).filter().uniq().value();
      resolved = resolveSassPath(imports[i], loadPaths, this.extensions);
      if (!resolved)
        continue;
      if (!_.includes(entry.imports, resolved)) {
        entry.imports.push(resolved);
        this.addFile(fs.realpathSync(resolved), filepath);
      }
    }
    if (parent) {
      resolvedParent = _(parent).intersection(this.loadPaths).value();
      if (resolvedParent) {
        resolvedParent = parent.substr(parent.indexOf(resolvedParent));
      } else {
        resolvedParent = parent;
      }
      entry.importedBy.push(resolvedParent);
    }
  };
  Graph.prototype.visitAncestors = function(filepath, callback) {
    this.visit(filepath, callback, function(err, node) {
      if (err || !node)
        return [];
      return node.importedBy;
    });
  };
  Graph.prototype.visitDescendents = function(filepath, callback) {
    this.visit(filepath, callback, function(err, node) {
      if (err || !node)
        return [];
      return node.imports;
    });
  };
  Graph.prototype.visit = function(filepath, callback, edgeCallback, visited) {
    filepath = fs.realpathSync(filepath);
    var visited = visited || [];
    if (!this.index.hasOwnProperty(filepath)) {
      edgeCallback('Graph doesn\'t contain ' + filepath, null);
    }
    var edges = edgeCallback(null, this.index[filepath]);
    var i,
        length = edges.length;
    for (i = 0; i < length; i++) {
      if (!_.includes(visited, edges[i])) {
        visited.push(edges[i]);
        callback(edges[i], this.index[edges[i]]);
        this.visit(edges[i], callback, edgeCallback, visited);
      }
    }
  };
  function processOptions(options) {
    return _.assign({
      loadPaths: [process.cwd()],
      extensions: ['scss', 'css']
    }, options);
  }
  module.exports.parseFile = function(filepath, options) {
    if (fs.lstatSync(filepath).isFile()) {
      filepath = path.resolve(filepath);
      options = processOptions(options);
      var graph = new Graph(options);
      graph.addFile(filepath);
      return graph;
    }
  };
  module.exports.parseDir = function(dirpath, options) {
    if (fs.lstatSync(dirpath).isDirectory()) {
      dirpath = path.resolve(dirpath);
      options = processOptions(options);
      var graph = new Graph(options, dirpath);
      return graph;
    }
  };
})(require('process'));
