function Greetr(){
	this.greeting = 'Hola Mundo!'
	this.greet = function(){
		console.log(this.greeting);
	}
}

module.exports = new Greetr();