
/**
 * Dependencies.
 */

var test = require('tape');
var time = require('..');

/**
 * Tests.
 */

test('measuring execution time', function(t) {
  t.plan(6);

  t.ok(typeof time === 'object', 'time is an object');
  t.ok(typeof time.start === 'function', 'time.start is a function');
  t.ok(typeof time.end === 'function', 'time.end is a function');

  time.start();
  var executionTime = time.end();
  
  t.ok(typeof executionTime === 'string', 'time.end() is a string');
  t.ok(executionTime.slice(-2) === 'ms', 'time.end() ends in "ms"');
  t.ok(Number(executionTime.slice(0, -2)), 'time.end()\'s all but the last two characters can be coerced to a number');
});
