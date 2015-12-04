var fs = require('fs');
var moves = fs.readFileSync('./input.txt').toString().split('');

var santa = {
	x: 0,
	y: 0
};
var roboSanta = {
	x: 0,
	y: 0
}
var isSanta = true;

var houses = [{
	x: 0,
	y: 0,
	presents: 0
}];

function findHouse(pos) {
	return houses.filter((house) =>
		pos.x === house.x &&
		pos.y === house.y)[0];
}

function givePresent(pos) {
	var house = findHouse(pos);
	if (house) {
		house.presents++;
	} else {
		houses.push({
			x: pos.x,
			y: pos.y,
			presents: 1
		});
	}
}

function move(dir) {
	if (isSanta === true) pos = santa;
	else pos = roboSanta;
	isSanta = !isSanta;
	if (dir === '^')
		pos.y--;
	else if (dir === '>')
		pos.x++;
	else if (dir === 'v')
		pos.y++;
	else if (dir === '<')
		pos.x--;
	givePresent(pos);
}

moves.forEach(move);

// count houses with at least one present
console.log(houses.length);
