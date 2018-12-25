/*
	SYNTACTIC SUGAR - a feature that only changes how you type something, but nothing changes under the hood. It's important to understand what is happening under the hood, so we don't make decisions based on flawed assumptions.
*/

// 'use strict'; 

'use strict';

class Person{
	constructor(firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet(){
		console.log(`Hello, ${this.firstname} ${this.lastname} `);
	}
}

var oleg = new Person('Oleg', 'Ligay');
oleg.greet();
