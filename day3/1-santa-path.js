var fs = require('fs');
var moves = fs.readFileSync('./input.txt').toString().split('');

var currentPosition = {
	x: 0,
	y: 0
};

var houses = [{
	x: 0,
	y: 0,
	presents: 0
}];

function findHouse() {
	return houses.filter((house) =>
		currentPosition.x === house.x &&
		currentPosition.y === house.y)[0];
}

function givePresent() {
	var house = findHouse();
	if (house) {
		house.presents++;
	} else {
		houses.push({
			x: currentPosition.x,
			y: currentPosition.y,
			presents: 1
		});
	}
}

function move(dir) {
	if (dir === '^')
		currentPosition.y--;
	else if (dir === '>')
		currentPosition.x++;
	else if (dir === 'v')
		currentPosition.y++;
	else if (dir === '<')
		currentPosition.x--;
	givePresent();
}

moves.forEach(move);

// count houses with at least one present
console.log(houses.length);
