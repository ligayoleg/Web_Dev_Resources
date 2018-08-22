// create a function constructor
//use capital letter to remind that it is a constuctor.
function Person(firstname, lastname){

	this.firstname = firstname;
	this.lastname = lastname;

}


//Create a greet function on a prototype of objects created from Person constructor
Person.prototype.greet = function(){
	console.log('Hello, ' + this.firstname + ' ' + this.lastname + '!');
};

let john = new Person('John', 'Doe');
//output john's firstname;
// console.log(john.firstname);

//call greet() function of an object john.
john.greet();

let jane = new Person('Jane', 'Doe');
jane.greet();


//output the created prototype
console.log(john.__proto__);
console.log(jane.__proto__);
//check if the greet() are the same for john and jane
console.log(john.__proto__ === jane.__proto__);







