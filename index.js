'use strict';

function* pairwiseIterator(object) {
  if (isIterable(object)) {
    for (let i = 0; i < object.length - 1; ++i) {
      yield [object[i], object[i + 1]];
    }
  } else if (typeof object === 'object' && object !== null) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length - 1; ++i) {
      yield [object[keys[i]], object[keys[i + 1]]];
    }
  }
}

function isIterable(obj) {
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}

module.exports = pairwiseIterator;
