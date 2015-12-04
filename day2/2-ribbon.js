var fs = require('fs');
var sizes = fs.readFileSync('./input.txt').toString();

function calcRibbon(row) {
    var digits = row.split('x').map((x) => parseInt(x));
    var l = digits[0], w = digits[1], h = digits[2];
    var ribbon = (l * w * h);

    return 2 * Math.min(l+w, w+h, h+l) + ribbon;
}

var total = sizes.split('\n').map((x) => calcRibbon(x));
var sum = 0;
total.forEach((x) => {sum += x})
console.log(sum);
