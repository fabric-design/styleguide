/* */ 
var arrayMap = require('./_arrayMap'),
    baseCastArrayLikeObject = require('./_baseCastArrayLikeObject'),
    baseIntersection = require('./_baseIntersection'),
    baseIteratee = require('./_baseIteratee'),
    last = require('./last'),
    rest = require('./rest');
var intersectionBy = rest(function(arrays) {
  var iteratee = last(arrays),
      mapped = arrayMap(arrays, baseCastArrayLikeObject);
  if (iteratee === last(mapped)) {
    iteratee = undefined;
  } else {
    mapped.pop();
  }
  return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped, baseIteratee(iteratee)) : [];
});
module.exports = intersectionBy;
