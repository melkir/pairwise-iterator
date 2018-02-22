import test from 'ava';
import iterable from '.';

const output = [['a', 'b'], ['b', 'c'], ['c', 'd']];

test('array', t => {
  const it = iterable(['a', 'b', 'c', 'd']);
  t.deepEqual([...it], output);
});

test('empty array', t => {
  const it = iterable([]);
  t.deepEqual(it.next(), { done: true, value: undefined });
});

test('string', t => {
  const it = iterable('abcd');
  t.deepEqual([...it], output);
});

test('object', t => {
  const it = iterable({ 1: 'a', 2: 'b', 3: 'c', 4: 'd' });
  t.deepEqual([...it], output);
});
