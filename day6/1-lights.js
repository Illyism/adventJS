var fs = require('fs');
var instructions = fs.readFileSync('./input.txt').toString().split('\n');

var onRegex = /^turn on (\d+),(\d+) through (\d+),(\d+)$/;
var offRegex = /^turn off (\d+),(\d+) through (\d+),(\d+)$/;
var toggleRegex = /^toggle (\d+),(\d+) through (\d+),(\d+)$/;

var grid = Array.apply(null, Array(1000)).map(() => {
  return Array.apply(null, Array(1000)).map(() => false);
});

function getPosition(regex, line) {
  var m = line.match(regex);
  return {
    x0: parseInt(m[1]),
    y0: parseInt(m[2]),
    x1: parseInt(m[3]),
    y1: parseInt(m[4])
  };
}

instructions.forEach(function(i) {
  if (onRegex.test(i)) {
    var pos = getPosition(onRegex, i);
    for (var x = pos.x0; x <= pos.x1; x++) {
      for (var y = pos.y0; y <= pos.y1; y++) {
        grid[x][y] = true;
      }
    }
  } else if (offRegex.test(i)) {
    var pos = getPosition(offRegex, i);
    for (var x = pos.x0; x <= pos.x1; x++) {
      for (var y = pos.y0; y <= pos.y1; y++) {
        grid[x][y] = false;
      }
    }
  } else if (toggleRegex.test(i)){
    var pos = getPosition(toggleRegex, i);
    for (var x = pos.x0; x <= pos.x1; x++) {
      for (var y = pos.y0; y <= pos.y1; y++) {
        grid[x][y] = !grid[x][y];
      }
    }
  }
});

var sum = 0;
grid.forEach((r) => {r.forEach((c) => {c === true ? sum++ : sum} )});
console.log(sum);
