function Greetr(){
	this.greeting = 'Greet 4!'
	this.greet = function(){
		console.log(this.greeting);
	}
}

module.exports = Greetr;