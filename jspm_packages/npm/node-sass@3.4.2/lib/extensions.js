/* */ 
(function(process) {
  var flags = {},
      fs = require('fs'),
      pkg = require('../package.json!systemjs-json'),
      path = require('path');
  function collectArguments(args) {
    for (var i = 0; i < args.length; i += 2) {
      if (args[i].lastIndexOf('--', 0) !== 0) {
        --i;
        continue;
      }
      flags[args[i]] = args[i + 1];
    }
  }
  function getRuntimeInfo() {
    var execPath = fs.realpathSync(process.execPath);
    var runtime = execPath.split(/[\\/]+/).pop().split('.').shift();
    runtime = runtime === 'nodejs' ? 'node' : runtime;
    return {
      name: runtime,
      execPath: execPath
    };
  }
  function getBinaryName() {
    var binaryName;
    if (flags['--sass-binary-name']) {
      binaryName = flags['--sass-binary-name'];
    } else if (process.env.SASS_BINARY_NAME) {
      binaryName = process.env.SASS_BINARY_NAME;
    } else if (process.env.npm_config_sass_binary_name) {
      binaryName = process.env.npm_config_sass_binary_name;
    } else if (pkg.nodeSassConfig && pkg.nodeSassConfig.binaryName) {
      binaryName = pkg.nodeSassConfig.binaryName;
    } else {
      binaryName = [process.platform, '-', process.arch, '-', process.versions.modules].join('');
    }
    return [binaryName, 'binding.node'].join('_');
  }
  function getBinaryUrl() {
    var site = flags['--sass-binary-site'] || process.env.SASS_BINARY_SITE || process.env.npm_config_sass_binary_site || (pkg.nodeSassConfig && pkg.nodeSassConfig.binarySite) || 'https://github.com/sass/node-sass/releases/download';
    return [site, 'v' + pkg.version, sass.binaryName].join('/');
  }
  collectArguments(process.argv.slice(2));
  var sass = process.sass = {};
  sass.binaryName = getBinaryName();
  sass.binaryUrl = getBinaryUrl();
  sass.runtime = getRuntimeInfo();
  sass.getBinaryPath = function(throwIfNotExists) {
    var binaryPath;
    if (flags['--sass-binary-path']) {
      binaryPath = flags['--sass-binary-path'];
    } else if (process.env.SASS_BINARY_PATH) {
      binaryPath = process.env.SASS_BINARY_PATH;
    } else if (process.env.npm_config_sass_binary_path) {
      binaryPath = process.env.npm_config_sass_binary_path;
    } else if (pkg.nodeSassConfig && pkg.nodeSassConfig.binaryPath) {
      binaryPath = pkg.nodeSassConfig.binaryPath;
    } else {
      binaryPath = path.join(__dirname, '..', 'vendor', sass.binaryName.replace(/_/, '/'));
    }
    if (!fs.existsSync(binaryPath) && throwIfNotExists) {
      throw new Error([['The `libsass` binding was not found in', binaryPath].join(' '), ['This usually happens because your node version has changed.'], ['Run `npm rebuild node-sass` to build the binding for your current node version.']].join('\n'));
    }
    return binaryPath;
  };
  sass.binaryPath = sass.getBinaryPath();
})(require('process'));
