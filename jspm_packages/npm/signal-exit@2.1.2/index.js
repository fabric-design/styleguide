/* */ 
(function(process) {
  var assert = require('assert');
  var signals = require('./signals');
  var EE = require('events');
  if (typeof EE !== 'function') {
    EE = EE.EventEmitter;
  }
  var emitter;
  if (process.__signal_exit_emitter__) {
    emitter = process.__signal_exit_emitter__;
  } else {
    emitter = process.__signal_exit_emitter__ = new EE();
    emitter.count = 0;
    emitter.emitted = {};
  }
  module.exports = function(cb, opts) {
    assert.equal(typeof cb, 'function', 'a callback must be provided for exit handler');
    if (loaded === false) {
      load();
    }
    var ev = 'exit';
    if (opts && opts.alwaysLast) {
      ev = 'afterexit';
    }
    var remove = function() {
      emitter.removeListener(ev, cb);
      if (emitter.listeners('exit').length === 0 && emitter.listeners('afterexit').length === 0) {
        unload();
      }
    };
    emitter.on(ev, cb);
    return remove;
  };
  module.exports.unload = unload;
  function unload() {
    if (!loaded) {
      return;
    }
    loaded = false;
    signals.forEach(function(sig) {
      try {
        process.removeListener(sig, sigListeners[sig]);
      } catch (er) {}
    });
    process.emit = originalProcessEmit;
    process.reallyExit = originalProcessReallyExit;
    emitter.count -= 1;
  }
  function emit(event, code, signal) {
    if (emitter.emitted[event]) {
      return;
    }
    emitter.emitted[event] = true;
    emitter.emit(event, code, signal);
  }
  var sigListeners = {};
  signals.forEach(function(sig) {
    sigListeners[sig] = function listener() {
      var listeners = process.listeners(sig);
      if (listeners.length === emitter.count) {
        unload();
        emit('exit', null, sig);
        emit('afterexit', null, sig);
        process.kill(process.pid, sig);
      }
    };
  });
  module.exports.signals = function() {
    return signals;
  };
  module.exports.load = load;
  var loaded = false;
  function load() {
    if (loaded) {
      return;
    }
    loaded = true;
    emitter.count += 1;
    signals = signals.filter(function(sig) {
      try {
        process.on(sig, sigListeners[sig]);
        return true;
      } catch (er) {
        return false;
      }
    });
    process.emit = processEmit;
    process.reallyExit = processReallyExit;
  }
  var originalProcessReallyExit = process.reallyExit;
  function processReallyExit(code) {
    process.exitCode = code || 0;
    emit('exit', process.exitCode, null);
    emit('afterexit', process.exitCode, null);
    originalProcessReallyExit.call(process, process.exitCode);
  }
  var originalProcessEmit = process.emit;
  function processEmit(ev, arg) {
    if (ev === 'exit') {
      if (arg !== undefined) {
        process.exitCode = arg;
      }
      var ret = originalProcessEmit.apply(this, arguments);
      emit('exit', process.exitCode, null);
      emit('afterexit', process.exitCode, null);
      return ret;
    } else {
      return originalProcessEmit.apply(this, arguments);
    }
  }
})(require('process'));
