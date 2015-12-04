var crypto = require('crypto');
var key = 'ckczppom';

var number = 0;
var search = '000000';
while (true) {
    var data = key + number.toString();
    var possibleAnswer = crypto.createHash('md5').update(data).digest("hex");
    if (possibleAnswer.substr(0, search.length) === search) {
        break;
    }
    number++;
}

console.log(number);
