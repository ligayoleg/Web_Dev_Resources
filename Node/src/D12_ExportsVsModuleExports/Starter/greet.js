exports = function(){
	console.log('Hello');
}

console.log(exports); //Exp
console.log(module.exports); //ModExp

// Right now exports as a function and console.log(module.exports) are pointing to the same memory. they are pased by reference. 

//now in the case using like equals, but when we set exports to equal, in JS when something is something is set equal to a value then it is a new object. 

// The problem with that is if ModExp broke the reference with Exp with a function, therefore when we call it, it logs the empty object

//** MUTATE: to change something. I.e. adding a method or property to an object means you've mutated the object.

//So in order to fix that problem, it is advisable to create a new file greet3.js and create another function and require it in app.js so it won't interfere with this file.

I