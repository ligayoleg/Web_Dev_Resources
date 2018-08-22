// function statement
function greet(){
	console.log('Hi!');
}
// invoke/call function
greet();

// function are first class
function logGreeting(fn){
	fn();
}
//invoke
logGreeting(greet);

//function expression
let greetMe = function (){
	console.log('Hi, Oleg!');
}
//invoke/ execute
greetMe();

//it's first class
logGreeting(greetMe);

//use the function expression on the fly
logGreeting(function(){
	console.log('Hello, Oleg!');
});

//function to insert/input code from greet.js file.
// ./ <- means in the same folder as app.js file.
require('./greet.js');
//greeting(); <- is not available. in order to make it available.
//Create a variable and assign require to it
let greeting = require('./greet.js');
greeting();












