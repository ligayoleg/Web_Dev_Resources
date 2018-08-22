let Emmiter = require('./emmiter');

let emitter = new Emmiter();

emitter.on('greet', function(){
	console.log('Somewhere, someone said hello.');
});

emitter.on('greet', function(){
	console.log('A greeeting occured.');
});

console.log('Hello!');
emitter.emit('greet');

/*
	when emitter.emit('greet') - manually emitts,
	the listener functions emitter.on listen 
	for a string 'greet', and then execute whatever
	was in those functions.

*/˚