function Greetr(){
	this.greeting = 'Hola Mundo! greet3'
	this.greet = function(){
		console.log(this.greeting);
	}
}

module.exports = new Greetr();