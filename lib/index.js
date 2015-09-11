
/**
 * Dependencies.
 */

var isNode = require('detect-node');
var ms = require('ms');

/**
 * Starting and ending times
 */

var startTime;
var endTime;

/**
 * Start timing.
 */

exports.start = function() {
  isNode
    ? startTime = process.hrtime()
    : startTime = performance.now();
}

/**
 * End timing.
 */


exports.end = function() {
  isNode
    ? endTime = process.hrtime(startTime)[1] / 1000000
    : endTime = performance.now();

  return ms(endTime);
}
