var obj = {
	name: 'Oleg Ligay',
	greet: function(){
		console.log(`Hello ${this.name}`);
	}
}

obj.greet();

obj.greet.call({name: 'Jane Doe'});

obj.greet.apply({name: 'James Doe'});