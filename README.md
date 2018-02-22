# pairwise-iterator [![Build Status](https://travis-ci.org/melkir/pairwise-iterator.svg?branch=master)](https://travis-ci.org/melkir/pairwise-iterator) [![codecov](https://codecov.io/gh/melkir/pairwise-iterator/branch/master/graph/badge.svg)](https://codecov.io/gh/melkir/pairwise-iterator)

> Iterate by pairwise values in a list

## Install

```
$ npm install pairwise-iterator
```

## Usage

### Array

```js
const pairwiseIterator = require('pairwise-iterator');

const it = pairwiseIterator(['a', 'b', 'c']);

it.next(); // => { value: [ 'a', 'b' ], done: false }
it.next(); // => { value: [ 'b', 'c' ], done: false }
it.next(); // => { value: undefined, done: true }
```

### Object

```js
const it = pairwiseIterator({
  1: 'a',
  2: 'b',
  3: 'c'
});

it.next(); // => { value: [ 'a', 'b' ], done: false }
it.next(); // => { value: [ 'b', 'c' ], done: false }
it.next(); // => { value: undefined, done: true }
```


## License

MIT © Thibaut Vieux
