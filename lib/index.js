
/**
 * Dependencies.
 */

var isNode = require('detect-node');
var ms = require('ms');

/**
 * Starting and stopping times
 */

var startTime;
var stopTime;

/**
 * Start timing.
 */

exports.start = function() {
  isNode
    ? startTime = process.hrtime()
    : startTime = performance.now();
}

/**
 * Stop timing.
 */


exports.stop = function() {
  isNode
    ? stopTime = process.hrtime(startTime)[1] / 1000000
    : stopTime = performance.now();

  return ms(stopTime);
}
