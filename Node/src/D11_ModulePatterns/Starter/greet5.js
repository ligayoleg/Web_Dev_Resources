var greeting = 'Hello world 5';

function greet(){
	console.log(greeting);
}

module.exports = {
	greet: greet
}

// This way when we create an object, it would be not be exposed outside of the module like in other examples. I reveal information that I want to reveal 

//REVEALING MODULE PATTERN: exposing only the properties and methods you want via an returned object. A very common and clean way to structure and protect within modules. 