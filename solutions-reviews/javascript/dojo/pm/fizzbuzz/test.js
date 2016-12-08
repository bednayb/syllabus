'use strict';

var test = require('tape');
var fizzbuzz = require('./fizzbuzz');

test('dividable by 3 and 5', function(t) {
  t.equal(fizzbuzz(15), 'fizzbuzz');
  t.end();
});

test('no parameter', function(t) {
  t.equal(Array.isArray(fizzbuzz()), true);
  t.end();
});