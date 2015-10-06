
# timer
[![NPM version][npm-image]][npm-url]
[![build status][circle-image]][circle-url]
[![license][license-image]][license-url]

Record accurate measurements of execution time. It's really simple, first run `timer.start();`, do some stuff, then run `timer.stop();`. That's all.

## Installation

    $ npm install basic-timer

## Usage

```js
var Timer = require('basic-timer');
var timer = Timer();

// start
timer.start();

// stop
timer.stop();
```

## Example

Some things are incredibly interesting to measure. Check out this simple example of timing how long it takes to iterate through an array of length 10000 and assigning each element a [random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) number. Play around with adding and removing 0s from the array declaration and measuring the difference in execution time.

```
var Timer = require('basic-timer');
var timer = Timer();

var arr = new Array(10000);

timer.start();

for (var i = 0; i < arr.length; i++) {
  arr[i] = Math.random();
}

timer.stop();
```

## License

[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/basic-timer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/basic-timer
[circle-image]: https://img.shields.io/circleci/project/stevenmiller888/timer.svg
[circle-url]: https://circleci.com/gh/stevenmiller888/timer
[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://tldrlegal.com/license/mit-license
