
/**
 * Dependencies.
 */

var isNode = require('detect-node');
var ms = require('ms');

/**
 * Expose `Timer`.
 */

module.exports = Timer;

/**
 * Timer.
 */

function Timer() {
  if (!(this instanceof Timer)) return new Timer();
}

/**
 * Start timing.
 */

Timer.prototype.start = function() {
  isNode
    ? this.startTime = process.hrtime()
    : this.startTime = performance.now();
};

/**
 * Stop timing.
 */

Timer.prototype.stop = function() {
  var startTime = this.startTime;
  var stopTime;

  isNode
    ? stopTime = process.hrtime(startTime)[1] / 1000000
    : stopTime = performance.now();

  return stopTime;
};
