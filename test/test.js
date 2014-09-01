'use strict';
var assert = require('assert');

var countWords = require('../');

assert.equal(
  countWords('this is a simple test'),
  5,
  'Counts words in simple input strings correctly'
);
