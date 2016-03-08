/* */ 
(function(process) {
  var path = require('path'),
      log = require('npmlog');
  function findNodeDirectory(scriptLocation, processObj) {
    if (scriptLocation === undefined) {
      scriptLocation = __dirname;
    }
    if (processObj === undefined) {
      processObj = process;
    }
    npm_parent_directory = path.join(scriptLocation, '../../../..');
    log.verbose('node-gyp root', 'npm_parent_directory is ' + path.basename(npm_parent_directory));
    node_root_dir = "";
    log.verbose('node-gyp root', 'Finding node root directory');
    if (path.basename(npm_parent_directory) === 'deps') {
      node_root_dir = path.join(npm_parent_directory, '..');
      log.verbose('node-gyp root', 'in build directory, root = ' + node_root_dir);
    } else if (path.basename(npm_parent_directory) === 'node_modules') {
      if (processObj.platform === 'win32') {
        node_root_dir = path.join(npm_parent_directory, '..');
      } else {
        node_root_dir = path.join(npm_parent_directory, '../..');
      }
      log.verbose('node-gyp root', 'in install directory, root = ' + node_root_dir);
    } else {
      var node_dir = path.dirname(processObj.execPath);
      var directory_up = path.basename(node_dir);
      if (directory_up === 'bin') {
        node_root_dir = path.join(node_dir, '..');
      } else if (directory_up === 'Release' || directory_up === 'Debug') {
        if (processObj.platform === 'win32') {
          node_root_dir = path.join(node_dir, '..');
        } else {
          node_root_dir = path.join(node_dir, '../..');
        }
      }
    }
    return node_root_dir;
  }
  module.exports = findNodeDirectory;
})(require('process'));
