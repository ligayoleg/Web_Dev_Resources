var fs = require('fs');//deals with file system

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt',
function (err, data){
	//ERROR FIRST CALLBACK:
	//callbacks take an eroor object as their first parameter.
	console.log(data.toString());
});