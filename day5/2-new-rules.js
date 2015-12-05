var fs = require('fs');
var strings = fs.readFileSync('./input.txt').toString().split('\n');

String.prototype.isNice = function() {
  return /(..).*\1/.test(this) &&
    /(.).\1/.test(this);
};

var nice = strings.filter((s) => s.isNice());
console.log(nice.length);
