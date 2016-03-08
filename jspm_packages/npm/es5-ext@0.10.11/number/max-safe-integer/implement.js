/* */ 
'use strict';
if (!require('./is-implemented')()) {
  Object.defineProperty(Number, 'MAX_SAFE_INTEGER', {
    value: require('./index'),
    configurable: false,
    enumerable: false,
    writable: false
  });
}
