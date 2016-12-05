'use strict';

var test = require('tape');
var index = require('./index');

test('true', function(t) {
  t.equal(true, true);
  t.end();
});

test('-1', function (t) {
    t.equal(index(), -1);
    t.end();
});
