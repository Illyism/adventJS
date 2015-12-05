var fs = require('fs');
var strings = fs.readFileSync('./input.txt').toString().split('\n');

String.prototype.isNice = function() {
  return /([aeiou][^aeiou]*){3}/gm.test(this) &&
    /(\w)\1{1,}/.test(this) &&
    !/ab|cd|pq|xy/.test(this)
};

var nice = strings.filter((s) => s.isNice());
console.log(nice.length);
