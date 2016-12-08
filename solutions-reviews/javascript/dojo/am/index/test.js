'use strict'

var test = require('tape');
var index = require('./index');

test('true', function(t) {
  t.equal(true, true);
  t.end();
});

test('index should return -1', function (t) {
  t.equal(index(), -1);
  t.end();
});

test('with !empty list input index should return 0', function (t) {
  t.equal(index(['x-mas', 'toy'], 'x-mas'), 0);
  t.end();
});

test('with !empty list return 1st index', function (t) {
  t.equal(index(['x-mas', 'toy'], 'toy'), 1);
  t.end();
});

test('with !empty list return 2nd index', function (t) {
  t.equal(index(['x-mas', 'puli', 'toy'], 'toy'), 2);
  t.end();
});

test('with !empty list and item not in list return -1', function (t) {
  t.equal(index(['x-mas', 'puli', 'toy'], 'virgacs'), -1);
  t.end();
});
