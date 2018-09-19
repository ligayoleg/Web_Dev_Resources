//
// OBJECT PROPERTIES AND METHODS
//
let obj = {
	greet : 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);


/*
	I can have a string, assign it to a variable.
	and use that variable in brackets to get a 
	particular property on an object.  
*/
let prop = 'greet';
console.log(obj[prop]);


//
// FUNCTIONS AND ARRAYS
//
let arr = [];

arr.push(function(){
	console.log('Hello, world 1');
});

arr.push(function(){
	console.log('Hello, world 2');
});

arr.push(function(){
	console.log('Hello, world 3');
});

arr.forEach(function(item){
	item();
});

/*
	I can use an array and assign it to a variable.
	I can assign functions as elements of that array
	and loop across that array and invoke all the functions
	in that array.
*/