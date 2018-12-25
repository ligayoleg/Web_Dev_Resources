var Emitter = require('events');
let eventConfig = require('./config').events;

let emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
	console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
	console.log('A greeting has occured');
});

emtr.on(eventConfig.FILESAVED, function(){
	console.log('File was saved!');
})

console.log('Hello');
emtr.emit(eventConfig.GREET);
emtr.emit(eventConfig.FILESAVED);


/*
	MAGIC STRING = a string that has some special meaining in our code.
	This is bad because it makes it easy to for a typo to cause a bug, and hard for tools to help use find it.
*/