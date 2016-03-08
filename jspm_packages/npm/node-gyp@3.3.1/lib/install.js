/* */ 
(function(Buffer, process) {
  module.exports = exports = install;
  module.exports.test = {
    download: download,
    readCAFile: readCAFile
  };
  exports.usage = 'Install node development files for the specified node version.';
  var fs = require('graceful-fs'),
      osenv = require('osenv'),
      tar = require('tar'),
      rm = require('rimraf'),
      path = require('path'),
      crypto = require('crypto'),
      zlib = require('zlib'),
      log = require('npmlog'),
      semver = require('semver'),
      fstream = require('fstream'),
      request = require('request'),
      minimatch = require('minimatch'),
      mkdir = require('mkdirp'),
      processRelease = require('./process-release'),
      win = process.platform == 'win32';
  function install(gyp, argv, callback) {
    var release = processRelease(argv, gyp, process.version, process.release);
    function cb(err) {
      if (cb.done)
        return;
      cb.done = true;
      if (err) {
        log.warn('install', 'got an error, rolling back install');
        gyp.commands.remove([release.versionDir], function(err2) {
          callback(err);
        });
      } else {
        callback(null, release.version);
      }
    }
    log.verbose('install', 'input version string %j', release.version);
    if (!release.semver) {
      return callback(new Error('Invalid version number: ' + release.version));
    }
    if (semver.lt(release.version, '0.8.0')) {
      return callback(new Error('Minimum target version is `0.8.0` or greater. Got: ' + release.version));
    }
    if (release.semver.prerelease[0] === 'pre') {
      log.verbose('detected "pre" node version', release.version);
      if (gyp.opts.nodedir) {
        log.verbose('--nodedir flag was passed; skipping install', gyp.opts.nodedir);
        callback();
      } else {
        callback(new Error('"pre" versions of node cannot be installed, use the --nodedir flag instead'));
      }
      return;
    }
    log.verbose('install', 'installing version: %s', release.versionDir);
    var devDir = path.resolve(gyp.devDir, release.versionDir);
    if (gyp.opts.ensure) {
      log.verbose('install', '--ensure was passed, so won\'t reinstall if already installed');
      fs.stat(devDir, function(err, stat) {
        if (err) {
          if (err.code == 'ENOENT') {
            log.verbose('install', 'version not already installed, continuing with install', release.version);
            go();
          } else if (err.code == 'EACCES') {
            eaccesFallback();
          } else {
            cb(err);
          }
          return;
        }
        log.verbose('install', 'version is already installed, need to check "installVersion"');
        var installVersionFile = path.resolve(devDir, 'installVersion');
        fs.readFile(installVersionFile, 'ascii', function(err, ver) {
          if (err && err.code != 'ENOENT') {
            return cb(err);
          }
          var installVersion = parseInt(ver, 10) || 0;
          log.verbose('got "installVersion"', installVersion);
          log.verbose('needs "installVersion"', gyp.package.installVersion);
          if (installVersion < gyp.package.installVersion) {
            log.verbose('install', 'version is no good; reinstalling');
            go();
          } else {
            log.verbose('install', 'version is good');
            cb();
          }
        });
      });
    } else {
      go();
    }
    function getContentSha(res, callback) {
      var shasum = crypto.createHash('sha256');
      res.on('data', function(chunk) {
        shasum.update(chunk);
      }).on('end', function() {
        callback(null, shasum.digest('hex'));
      });
    }
    function go() {
      log.verbose('ensuring nodedir is created', devDir);
      mkdir(devDir, function(err, created) {
        if (err) {
          if (err.code == 'EACCES') {
            eaccesFallback();
          } else {
            cb(err);
          }
          return;
        }
        if (created) {
          log.verbose('created nodedir', created);
        }
        var tarPath = gyp.opts.tarball;
        var badDownload = false,
            extractCount = 0,
            gunzip = zlib.createGunzip(),
            extracter = tar.Extract({
              path: devDir,
              strip: 1,
              filter: isValid
            });
        var contentShasums = {};
        var expectShasums = {};
        function isValid() {
          var name = this.path.substring(devDir.length + 1);
          var isValid = valid(name);
          if (name === '' && this.type === 'Directory') {
            return true;
          }
          if (isValid) {
            log.verbose('extracted file from tarball', name);
            extractCount++;
          } else {
            log.silly('ignoring from tarball', name);
          }
          return isValid;
        }
        gunzip.on('error', cb);
        extracter.on('error', cb);
        extracter.on('end', afterTarball);
        if (tarPath) {
          var input = fs.createReadStream(tarPath);
          input.pipe(gunzip).pipe(extracter);
          return;
        }
        try {
          var req = download(gyp, process.env, release.tarballUrl);
        } catch (e) {
          return cb(e);
        }
        req.on('error', function(err) {
          if (err.code === 'ENOTFOUND') {
            return cb(new Error('This is most likely not a problem with node-gyp or the package itself and\n' + 'is related to network connectivity. In most cases you are behind a proxy or have bad \n' + 'network settings.'));
          }
          badDownload = true;
          cb(err);
        });
        req.on('close', function() {
          if (extractCount === 0) {
            cb(new Error('Connection closed while downloading tarball file'));
          }
        });
        req.on('response', function(res) {
          if (res.statusCode !== 200) {
            badDownload = true;
            cb(new Error(res.statusCode + ' response downloading ' + release.tarballUrl));
            return;
          }
          getContentSha(res, function(_, checksum) {
            var filename = path.basename(release.tarballUrl).trim();
            contentShasums[filename] = checksum;
            log.verbose('content checksum', filename, checksum);
          });
          req.pipe(gunzip).pipe(extracter);
        });
        function afterTarball() {
          if (badDownload)
            return;
          if (extractCount === 0) {
            return cb(new Error('There was a fatal problem while downloading/extracting the tarball'));
          }
          log.verbose('tarball', 'done parsing tarball');
          var async = 0;
          if (win) {
            async++;
            downloadNodeLib(deref);
          }
          async++;
          var installVersionPath = path.resolve(devDir, 'installVersion');
          fs.writeFile(installVersionPath, gyp.package.installVersion + '\n', deref);
          if (!tarPath) {
            async++;
            downloadShasums(deref);
          }
          if (async === 0) {
            cb();
          }
          function deref(err) {
            if (err)
              return cb(err);
            async--;
            if (!async) {
              log.verbose('download contents checksum', JSON.stringify(contentShasums));
              for (var k in contentShasums) {
                log.verbose('validating download checksum for ' + k, '(%s == %s)', contentShasums[k], expectShasums[k]);
                if (contentShasums[k] !== expectShasums[k]) {
                  cb(new Error(k + ' local checksum ' + contentShasums[k] + ' not match remote ' + expectShasums[k]));
                  return;
                }
              }
              cb();
            }
          }
        }
        function downloadShasums(done) {
          log.verbose('check download content checksum, need to download `SHASUMS256.txt`...');
          var shasumsPath = path.resolve(devDir, 'SHASUMS256.txt');
          log.verbose('checksum url', release.shasumsUrl);
          try {
            var req = download(gyp, process.env, release.shasumsUrl);
          } catch (e) {
            return cb(e);
          }
          req.on('error', done);
          req.on('response', function(res) {
            if (res.statusCode !== 200) {
              done(new Error(res.statusCode + ' status code downloading checksum'));
              return;
            }
            var chunks = [];
            res.on('data', function(chunk) {
              chunks.push(chunk);
            });
            res.on('end', function() {
              var lines = Buffer.concat(chunks).toString().trim().split('\n');
              lines.forEach(function(line) {
                var items = line.trim().split(/\s+/);
                if (items.length !== 2)
                  return;
                var name = items[1].replace(/^\.\//, '');
                expectShasums[name] = items[0];
              });
              log.verbose('checksum data', JSON.stringify(expectShasums));
              done();
            });
          });
        }
        function downloadNodeLib(done) {
          log.verbose('on Windows; need to download `' + release.name + '.lib`...');
          var dir32 = path.resolve(devDir, 'ia32'),
              dir64 = path.resolve(devDir, 'x64'),
              libPath32 = path.resolve(dir32, release.name + '.lib'),
              libPath64 = path.resolve(dir64, release.name + '.lib');
          log.verbose('32-bit ' + release.name + '.lib dir', dir32);
          log.verbose('64-bit ' + release.name + '.lib dir', dir64);
          log.verbose('`' + release.name + '.lib` 32-bit url', release.libUrl32);
          log.verbose('`' + release.name + '.lib` 64-bit url', release.libUrl64);
          var async = 2;
          mkdir(dir32, function(err) {
            if (err)
              return done(err);
            log.verbose('streaming 32-bit ' + release.name + '.lib to:', libPath32);
            try {
              var req = download(gyp, process.env, release.libUrl32, cb);
            } catch (e) {
              return cb(e);
            }
            req.on('error', done);
            req.on('response', function(res) {
              if (res.statusCode !== 200) {
                done(new Error(res.statusCode + ' status code downloading 32-bit ' + release.name + '.lib'));
                return;
              }
              getContentSha(res, function(_, checksum) {
                contentShasums[release.libPath32] = checksum;
                log.verbose('content checksum', release.libPath32, checksum);
              });
              var ws = fs.createWriteStream(libPath32);
              ws.on('error', cb);
              req.pipe(ws);
            });
            req.on('end', function() {
              --async || done();
            });
          });
          mkdir(dir64, function(err) {
            if (err)
              return done(err);
            log.verbose('streaming 64-bit ' + release.name + '.lib to:', libPath64);
            try {
              var req = download(gyp, process.env, release.libUrl64, cb);
            } catch (e) {
              return cb(e);
            }
            req.on('error', done);
            req.on('response', function(res) {
              if (res.statusCode !== 200) {
                done(new Error(res.statusCode + ' status code downloading 64-bit ' + release.name + '.lib'));
                return;
              }
              getContentSha(res, function(_, checksum) {
                contentShasums[release.libPath64] = checksum;
                log.verbose('content checksum', release.libPath64, checksum);
              });
              var ws = fs.createWriteStream(libPath64);
              ws.on('error', cb);
              req.pipe(ws);
            });
            req.on('end', function() {
              --async || done();
            });
          });
        }
      });
    }
    function valid(file) {
      return minimatch(file, '*.h', {matchBase: true}) || minimatch(file, '*.gypi', {matchBase: true});
    }
    function eaccesFallback() {
      var tmpdir = osenv.tmpdir();
      gyp.devDir = path.resolve(tmpdir, '.node-gyp');
      log.warn('EACCES', 'user "%s" does not have permission to access the dev dir "%s"', osenv.user(), devDir);
      log.warn('EACCES', 'attempting to reinstall using temporary dev dir "%s"', gyp.devDir);
      if (process.cwd() == tmpdir) {
        log.verbose('tmpdir == cwd', 'automatically will remove dev files after to save disk space');
        gyp.todo.push({
          name: 'remove',
          args: argv
        });
      }
      gyp.commands.install(argv, cb);
    }
  }
  function download(gyp, env, url) {
    log.http('GET', url);
    var requestOpts = {
      uri: url,
      headers: {'User-Agent': 'node-gyp v' + gyp.version + ' (node ' + process.version + ')'}
    };
    var cafile = gyp.opts.cafile;
    if (cafile) {
      requestOpts.ca = readCAFile(cafile);
    }
    var proxyUrl = gyp.opts.proxy || env.http_proxy || env.HTTP_PROXY || env.npm_config_proxy;
    if (proxyUrl) {
      if (/^https?:\/\//i.test(proxyUrl)) {
        log.verbose('download', 'using proxy url: "%s"', proxyUrl);
        requestOpts.proxy = proxyUrl;
      } else {
        log.warn('download', 'ignoring invalid "proxy" config setting: "%s"', proxyUrl);
      }
    }
    var req = request(requestOpts);
    req.on('response', function(res) {
      log.http(res.statusCode, url);
    });
    return req;
  }
  function readCAFile(filename) {
    var ca = fs.readFileSync(filename, 'utf8');
    var re = /(-----BEGIN CERTIFICATE-----[\S\s]*?-----END CERTIFICATE-----)/g;
    return ca.match(re);
  }
})(require('buffer').Buffer, require('process'));
