
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
  t.ok(typeof time.stop === 'function', 'time.stop is a function');

  time.start();
  var executionTime = time.stop();

  t.ok(typeof executionTime === 'string', 'time.stop() is a string');
  t.ok(executionTime.slice(-2) === 'ms', 'time.stop() ends in "ms"');
  t.ok(Number(executionTime.slice(0, -2)), 'time.stop()\'s all but the last two characters can be coerced to a number');
});
