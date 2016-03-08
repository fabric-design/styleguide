/* */ 
(function(process) {
  module.exports = glob;
  var fs = require('graceful-fs'),
      minimatch = require('minimatch'),
      Minimatch = minimatch.Minimatch,
      inherits = require('inherits'),
      EE = require('events').EventEmitter,
      path = require('path'),
      isDir = {},
      assert = require('assert').ok;
  function glob(pattern, options, cb) {
    if (typeof options === "function")
      cb = options, options = {};
    if (!options)
      options = {};
    if (typeof options === "number") {
      deprecated();
      return;
    }
    var g = new Glob(pattern, options, cb);
    return g.sync ? g.found : g;
  }
  glob.fnmatch = deprecated;
  function deprecated() {
    throw new Error("glob's interface has changed. Please see the docs.");
  }
  glob.sync = globSync;
  function globSync(pattern, options) {
    if (typeof options === "number") {
      deprecated();
      return;
    }
    options = options || {};
    options.sync = true;
    return glob(pattern, options);
  }
  glob.Glob = Glob;
  inherits(Glob, EE);
  function Glob(pattern, options, cb) {
    if (!(this instanceof Glob)) {
      return new Glob(pattern, options, cb);
    }
    if (typeof cb === "function") {
      this.on("error", cb);
      this.on("end", function(matches) {
        cb(null, matches);
      });
    }
    options = options || {};
    this.EOF = {};
    this._emitQueue = [];
    this.maxDepth = options.maxDepth || 1000;
    this.maxLength = options.maxLength || Infinity;
    this.statCache = options.statCache || {};
    this.changedCwd = false;
    var cwd = process.cwd();
    if (!options.hasOwnProperty("cwd"))
      this.cwd = cwd;
    else {
      this.cwd = options.cwd;
      this.changedCwd = path.resolve(options.cwd) !== cwd;
    }
    this.root = options.root || path.resolve(this.cwd, "/");
    this.root = path.resolve(this.root);
    if (process.platform === "win32")
      this.root = this.root.replace(/\\/g, "/");
    this.nomount = !!options.nomount;
    if (!pattern) {
      throw new Error("must provide pattern");
    }
    if (options.matchBase && -1 === pattern.indexOf("/")) {
      if (options.noglobstar) {
        throw new Error("base matching requires globstar");
      }
      pattern = "**/" + pattern;
    }
    this.strict = options.strict !== false;
    this.dot = !!options.dot;
    this.mark = !!options.mark;
    this.sync = !!options.sync;
    this.nounique = !!options.nounique;
    this.nonull = !!options.nonull;
    this.nosort = !!options.nosort;
    this.nocase = !!options.nocase;
    this.stat = !!options.stat;
    this.debug = !!options.debug || !!options.globDebug;
    if (this.debug)
      this.log = console.error;
    this.silent = !!options.silent;
    var mm = this.minimatch = new Minimatch(pattern, options);
    this.options = mm.options;
    pattern = this.pattern = mm.pattern;
    this.error = null;
    this.aborted = false;
    EE.call(this);
    var n = this.minimatch.set.length;
    this.matches = new Array(n);
    this.minimatch.set.forEach(iterator.bind(this));
    function iterator(pattern, i, set) {
      this._process(pattern, 0, i, function(er) {
        if (er)
          this.emit("error", er);
        if (--n <= 0)
          this._finish();
      });
    }
  }
  Glob.prototype.log = function() {};
  Glob.prototype._finish = function() {
    assert(this instanceof Glob);
    var nou = this.nounique,
        all = nou ? [] : {};
    for (var i = 0,
        l = this.matches.length; i < l; i++) {
      var matches = this.matches[i];
      this.log("matches[%d] =", i, matches);
      if (!matches) {
        if (this.nonull) {
          var literal = this.minimatch.globSet[i];
          if (nou)
            all.push(literal);
          else
            all[literal] = true;
        }
      } else {
        var m = Object.keys(matches);
        if (nou)
          all.push.apply(all, m);
        else
          m.forEach(function(m) {
            all[m] = true;
          });
      }
    }
    if (!nou)
      all = Object.keys(all);
    if (!this.nosort) {
      all = all.sort(this.nocase ? alphasorti : alphasort);
    }
    if (this.mark) {
      all = all.map(function(m) {
        var sc = this.statCache[m];
        if (!sc)
          return m;
        var isDir = (Array.isArray(sc) || sc === 2);
        if (isDir && m.slice(-1) !== "/") {
          return m + "/";
        }
        if (!isDir && m.slice(-1) === "/") {
          return m.replace(/\/+$/, "");
        }
        return m;
      }, this);
    }
    this.log("emitting end", all);
    this.EOF = this.found = all;
    this.emitMatch(this.EOF);
  };
  function alphasorti(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    return alphasort(a, b);
  }
  function alphasort(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  Glob.prototype.abort = function() {
    this.aborted = true;
    this.emit("abort");
  };
  Glob.prototype.pause = function() {
    if (this.paused)
      return;
    if (this.sync)
      this.emit("error", new Error("Can't pause/resume sync glob"));
    this.paused = true;
    this.emit("pause");
  };
  Glob.prototype.resume = function() {
    if (!this.paused)
      return;
    if (this.sync)
      this.emit("error", new Error("Can't pause/resume sync glob"));
    this.paused = false;
    this.emit("resume");
    this._processEmitQueue();
  };
  Glob.prototype.emitMatch = function(m) {
    this._emitQueue.push(m);
    this._processEmitQueue();
  };
  Glob.prototype._processEmitQueue = function(m) {
    while (!this._processingEmitQueue && !this.paused) {
      this._processingEmitQueue = true;
      var m = this._emitQueue.shift();
      if (!m) {
        this._processingEmitQueue = false;
        break;
      }
      this.log('emit!', m === this.EOF ? "end" : "match");
      this.emit(m === this.EOF ? "end" : "match", m);
      this._processingEmitQueue = false;
    }
  };
  Glob.prototype._process = function(pattern, depth, index, cb_) {
    assert(this instanceof Glob);
    var cb = function cb(er, res) {
      assert(this instanceof Glob);
      if (this.paused) {
        if (!this._processQueue) {
          this._processQueue = [];
          this.once("resume", function() {
            var q = this._processQueue;
            this._processQueue = null;
            q.forEach(function(cb) {
              cb();
            });
          });
        }
        this._processQueue.push(cb_.bind(this, er, res));
      } else {
        cb_.call(this, er, res);
      }
    }.bind(this);
    if (this.aborted)
      return cb();
    if (depth > this.maxDepth)
      return cb();
    var n = 0;
    while (typeof pattern[n] === "string") {
      n++;
    }
    var prefix;
    switch (n) {
      case pattern.length:
        prefix = pattern.join("/");
        this._stat(prefix, function(exists, isDir) {
          if (exists) {
            if (prefix && isAbsolute(prefix) && !this.nomount) {
              if (prefix.charAt(0) === "/") {
                prefix = path.join(this.root, prefix);
              } else {
                prefix = path.resolve(this.root, prefix);
              }
            }
            if (process.platform === "win32")
              prefix = prefix.replace(/\\/g, "/");
            this.matches[index] = this.matches[index] || {};
            this.matches[index][prefix] = true;
            this.emitMatch(prefix);
          }
          return cb();
        });
        return;
      case 0:
        prefix = null;
        break;
      default:
        prefix = pattern.slice(0, n);
        prefix = prefix.join("/");
        break;
    }
    var read;
    if (prefix === null)
      read = ".";
    else if (isAbsolute(prefix) || isAbsolute(pattern.join("/"))) {
      if (!prefix || !isAbsolute(prefix)) {
        prefix = path.join("/", prefix);
      }
      read = prefix = path.resolve(prefix);
      this.log('absolute: ', prefix, this.root, pattern, read);
    } else {
      read = prefix;
    }
    this.log('readdir(%j)', read, this.cwd, this.root);
    return this._readdir(read, function(er, entries) {
      if (er) {
        return cb();
      }
      if (pattern[n] === minimatch.GLOBSTAR) {
        var s = [pattern.slice(0, n).concat(pattern.slice(n + 1))];
        entries.forEach(function(e) {
          if (e.charAt(0) === "." && !this.dot)
            return;
          s.push(pattern.slice(0, n).concat(e).concat(pattern.slice(n + 1)));
          s.push(pattern.slice(0, n).concat(e).concat(pattern.slice(n)));
        }, this);
        var l = s.length,
            errState = null;
        s.forEach(function(gsPattern) {
          this._process(gsPattern, depth + 1, index, function(er) {
            if (errState)
              return;
            if (er)
              return cb(errState = er);
            if (--l <= 0)
              return cb();
          });
        }, this);
        return;
      }
      var pn = pattern[n];
      if (typeof pn === "string") {
        var found = entries.indexOf(pn) !== -1;
        entries = found ? entries[pn] : [];
      } else {
        var rawGlob = pattern[n]._glob,
            dotOk = this.dot || rawGlob.charAt(0) === ".";
        entries = entries.filter(function(e) {
          return (e.charAt(0) !== "." || dotOk) && (typeof pattern[n] === "string" && e === pattern[n] || e.match(pattern[n]));
        });
      }
      if (n === pattern.length - 1 && !this.mark && !this.stat) {
        entries.forEach(function(e) {
          if (prefix) {
            if (prefix !== "/")
              e = prefix + "/" + e;
            else
              e = prefix + e;
          }
          if (e.charAt(0) === "/" && !this.nomount) {
            e = path.join(this.root, e);
          }
          if (process.platform === "win32")
            e = e.replace(/\\/g, "/");
          this.matches[index] = this.matches[index] || {};
          this.matches[index][e] = true;
          this.emitMatch(e);
        }, this);
        return cb.call(this);
      }
      var l = entries.length,
          errState = null;
      if (l === 0)
        return cb();
      entries.forEach(function(e) {
        var p = pattern.slice(0, n).concat(e).concat(pattern.slice(n + 1));
        this._process(p, depth + 1, index, function(er) {
          if (errState)
            return;
          if (er)
            return cb(errState = er);
          if (--l === 0)
            return cb.call(this);
        });
      }, this);
    });
  };
  Glob.prototype._stat = function(f, cb) {
    assert(this instanceof Glob);
    var abs = f;
    if (f.charAt(0) === "/") {
      abs = path.join(this.root, f);
    } else if (this.changedCwd) {
      abs = path.resolve(this.cwd, f);
    }
    this.log('stat', [this.cwd, f, '=', abs]);
    if (f.length > this.maxLength) {
      var er = new Error("Path name too long");
      er.code = "ENAMETOOLONG";
      er.path = f;
      return this._afterStat(f, abs, cb, er);
    }
    if (this.statCache.hasOwnProperty(f)) {
      var exists = this.statCache[f],
          isDir = exists && (Array.isArray(exists) || exists === 2);
      if (this.sync)
        return cb.call(this, !!exists, isDir);
      return process.nextTick(cb.bind(this, !!exists, isDir));
    }
    if (this.sync) {
      var er,
          stat;
      try {
        stat = fs.statSync(abs);
      } catch (e) {
        er = e;
      }
      this._afterStat(f, abs, cb, er, stat);
    } else {
      fs.stat(abs, this._afterStat.bind(this, f, abs, cb));
    }
  };
  Glob.prototype._afterStat = function(f, abs, cb, er, stat) {
    var exists;
    assert(this instanceof Glob);
    if (abs.slice(-1) === "/" && stat && !stat.isDirectory()) {
      this.log("should be ENOTDIR, fake it");
      er = new Error("ENOTDIR, not a directory '" + abs + "'");
      er.path = abs;
      er.code = "ENOTDIR";
      stat = null;
    }
    if (er || !stat) {
      exists = false;
    } else {
      exists = stat.isDirectory() ? 2 : 1;
    }
    this.statCache[f] = this.statCache[f] || exists;
    cb.call(this, !!exists, exists === 2);
  };
  Glob.prototype._readdir = function(f, cb) {
    assert(this instanceof Glob);
    var abs = f;
    if (f.charAt(0) === "/") {
      abs = path.join(this.root, f);
    } else if (isAbsolute(f)) {
      abs = f;
    } else if (this.changedCwd) {
      abs = path.resolve(this.cwd, f);
    }
    this.log('readdir', [this.cwd, f, abs]);
    if (f.length > this.maxLength) {
      var er = new Error("Path name too long");
      er.code = "ENAMETOOLONG";
      er.path = f;
      return this._afterReaddir(f, abs, cb, er);
    }
    if (this.statCache.hasOwnProperty(f)) {
      var c = this.statCache[f];
      if (Array.isArray(c)) {
        if (this.sync)
          return cb.call(this, null, c);
        return process.nextTick(cb.bind(this, null, c));
      }
      if (!c || c === 1) {
        var code = c ? "ENOTDIR" : "ENOENT",
            er = new Error((c ? "Not a directory" : "Not found") + ": " + f);
        er.path = f;
        er.code = code;
        this.log(f, er);
        if (this.sync)
          return cb.call(this, er);
        return process.nextTick(cb.bind(this, er));
      }
    }
    if (this.sync) {
      var er,
          entries;
      try {
        entries = fs.readdirSync(abs);
      } catch (e) {
        er = e;
      }
      return this._afterReaddir(f, abs, cb, er, entries);
    }
    fs.readdir(abs, this._afterReaddir.bind(this, f, abs, cb));
  };
  Glob.prototype._afterReaddir = function(f, abs, cb, er, entries) {
    assert(this instanceof Glob);
    if (entries && !er) {
      this.statCache[f] = entries;
      if (!this.mark && !this.stat) {
        entries.forEach(function(e) {
          if (f === "/")
            e = f + e;
          else
            e = f + "/" + e;
          this.statCache[e] = true;
        }, this);
      }
      return cb.call(this, er, entries);
    }
    if (er)
      switch (er.code) {
        case "ENOTDIR":
          this.statCache[f] = 1;
          return cb.call(this, er);
        case "ENOENT":
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
          this.statCache[f] = false;
          return cb.call(this, er);
        default:
          this.statCache[f] = false;
          if (this.strict)
            this.emit("error", er);
          if (!this.silent)
            console.error("glob error", er);
          return cb.call(this, er);
      }
  };
  var isAbsolute = process.platform === "win32" ? absWin : absUnix;
  function absWin(p) {
    if (absUnix(p))
      return true;
    var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
        result = splitDeviceRe.exec(p),
        device = result[1] || '',
        isUnc = device && device.charAt(1) !== ':',
        isAbsolute = !!result[2] || isUnc;
    return isAbsolute;
  }
  function absUnix(p) {
    return p.charAt(0) === "/" || p === "";
  }
})(require('process'));
