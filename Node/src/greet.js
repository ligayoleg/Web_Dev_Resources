/*
greet file would the first module. that is the first set of JS instructions, designed to be independent from other code and yet working in tandem with it. Something I can re-use, also keep my code structured.

*/

let greeting = function(){
	console.log('Hola, senior!');	
};
//invoke
greeting();

//special place to put into if i want contents to be available for other .js files.
module.exports = greeting;


