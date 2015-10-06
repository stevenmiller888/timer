
/**
 * Dependencies.
 */

var test = require('tape');
var Timer = require('..');

/**
 * Tests.
 */

test('measuring execution time', function(t) {
  t.plan(4);

  var timer = Timer();
  t.ok(typeof Timer === 'function', 'Timer is an object');
  t.ok(typeof timer.start === 'function', 'timer.start is a function');
  t.ok(typeof timer.stop === 'function', 'timer.stop is a function');

  timer.start();
  var executionTime = timer.stop();

  t.ok(typeof executionTime === 'number', 'timer.stop() is a string');
});
