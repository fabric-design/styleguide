/* */ 
'use strict';
if (!require('./is-implemented')()) {
  Object.defineProperty(Number, 'EPSILON', {
    value: require('./index'),
    configurable: false,
    enumerable: false,
    writable: false
  });
}
