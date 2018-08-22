var Emitter = require('events');
let eventConfig = require('./config').events;

let emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
	console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
	console.log('A greeting has occured');
});

console.log('Hello');
emtr.emit(eventConfig.GREET);