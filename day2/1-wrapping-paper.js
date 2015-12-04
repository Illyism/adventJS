var fs = require('fs');
var sizes = fs.readFileSync('./input.txt').toString();

// l * w * h
function calcRow(row) {
    var digits = row.split('x').map((x) => parseInt(x));
    var l = digits[0], w = digits[1], h = digits[2];

    var sideOne = l * w;
    var sideTwo = w * h;
    var sideThree = h * l;

    var smallestSide = Math.min.call(null, sideOne, sideTwo, sideThree);

    return 2 * sideOne + 2 * sideTwo + 2 * sideThree + smallestSide;
}

var total = sizes.split('\n').map((x) => calcRow(x));
var sum = 0;
total.forEach((x) => {sum += x})
console.log(sum);
