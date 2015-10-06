
/**
 * Dependencies.
 */

var test = require('tape');
var Timer = require('..');

/**
 * Tests.
 */

test('measuring execution time', function(t) {
  t.plan(6);

  var timer = Timer();
  t.ok(typeof Timer === 'function', 'Timer is an object');
  t.ok(typeof timer.start === 'function', 'timer.start is a function');
  t.ok(typeof timer.stop === 'function', 'timer.stop is a function');

  timer.start();
  var executionTime = timer.stop();

  t.ok(typeof executionTime === 'string', 'timer.stop() is a string');
  t.ok(executionTime.slice(-2) === 'ms', 'timer.stop() ends in "ms"');
  t.ok(Number(executionTime.slice(0, -2)), 'timer.stop()\'s all but the last two characters can be coerced to a number');
});
