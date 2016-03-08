/* */ 
(function(process) {
  var eol = require('os').EOL,
      pkg = require('../package.json!systemjs-json'),
      fs = require('fs'),
      mkdir = require('mkdirp'),
      path = require('path'),
      spawn = require('cross-spawn');
  require('../lib/extensions');
  function afterBuild(options) {
    var install = process.sass.binaryPath;
    var target = path.join(__dirname, '..', 'build', options.debug ? 'Debug' : process.config.target_defaults.default_configuration, 'binding.node');
    mkdir(path.dirname(install), function(err) {
      if (err && err.code !== 'EEXIST') {
        console.error(err.message);
        return;
      }
      fs.stat(target, function(err) {
        if (err) {
          console.error('Build succeeded but target not found');
          return;
        }
        fs.rename(target, install, function(err) {
          if (err) {
            console.error(err.message);
            return;
          }
          console.log('Installed in `', install, '`');
        });
      });
    });
  }
  function manageProcess(proc, cb) {
    var errorMsg = '';
    proc.stderr.on('data', function(data) {
      errorMsg += data.toString();
    });
    proc.on('close', function(code) {
      cb(code === 0 ? null : {message: errorMsg});
    });
  }
  function initSubmodules(cb) {
    console.log('Detected a git install');
    console.log('Cloning libSass into src/libsass');
    var clone = spawn('git', ['clone', 'git@github.com:sass/libsass.git', './src/libsass']);
    manageProcess(clone, function(err) {
      if (err) {
        cb(err);
        return;
      }
      console.log('Checking out libsass to ' + pkg.libsass);
      var checkout = spawn('git', ['checkout', pkg.libsass], {cwd: './src/libsass'});
      manageProcess(checkout, function(err) {
        cb(err);
      });
    });
  }
  function installGitDependencies(options, cb) {
    var libsassPath = './src/libsass';
    if (process.env.LIBSASS_EXT || options.libsassExt) {
      cb();
    } else if (fs.access) {
      fs.access(libsassPath, fs.R_OK, function(err) {
        err && err.code === 'ENOENT' ? initSubmodules(cb) : cb();
      });
    } else {
      fs.exists(libsassPath, function(exists) {
        exists ? cb() : initSubmodules(cb);
      });
    }
  }
  function build(options) {
    installGitDependencies(options, function(err) {
      if (err) {
        console.error(err.message);
        process.exit(1);
      }
      var args = [require.resolve(path.join('node-gyp', 'bin', 'node-gyp.js')), 'rebuild', '--verbose'].concat(['libsass_ext', 'libsass_cflags', 'libsass_ldflags', 'libsass_library'].map(function(subject) {
        return ['--', subject, '=', process.env[subject.toUpperCase()] || ''].join('');
      })).concat(options.args);
      console.log(['Building:', process.sass.runtime.execPath].concat(args).join(' '));
      var proc = spawn(process.sass.runtime.execPath, args, {stdio: [0, 1, 2]});
      proc.on('exit', function(errorCode) {
        if (!errorCode) {
          afterBuild(options);
          return;
        }
        console.error(errorCode === 127 ? 'node-gyp not found!' : 'Build failed');
        process.exit(1);
      });
    });
  }
  function parseArgs(args) {
    var options = {
      arch: process.arch,
      platform: process.platform
    };
    options.args = args.filter(function(arg) {
      if (arg === '-f' || arg === '--force') {
        options.force = true;
        return false;
      } else if (arg.substring(0, 13) === '--target_arch') {
        options.arch = arg.substring(14);
      } else if (arg === '-d' || arg === '--debug') {
        options.debug = true;
      } else if (arg.substring(0, 13) === '--libsass_ext' && arg.substring(14) !== 'no') {
        options.libsassExt = true;
      }
      return true;
    });
    return options;
  }
  function testBinary(options) {
    if (options.force || process.env.SASS_FORCE_BUILD) {
      return build(options);
    }
    try {
      process.sass.getBinaryPath(true);
    } catch (e) {
      return build(options);
    }
    console.log('`', process.sass.binaryPath, '` exists.', eol, 'testing binary.');
    try {
      require('../lib/index').renderSync({data: 's { a: ss }'});
      console.log('Binary is fine; exiting.');
    } catch (e) {
      console.log(['Problem with the binary.', 'Manual build incoming.'].join(eol));
      return build(options);
    }
  }
  testBinary(parseArgs(process.argv.slice(2)));
})(require('process'));
