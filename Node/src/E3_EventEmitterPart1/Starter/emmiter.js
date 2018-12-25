/*
	emmitter is going to allow us to say and event has happened, and to respond to the event happening.

	->EVENT LISTENER:
		the code that responds to an event.
		in JS, the listener will be a function.
*/

function Emmiter(){
	this.events = {};
}


//Upon something happening 
Emmiter.prototype.on = function(type, listener) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
}

Emmiter.prototype.emit = function(type){
	if(this.events[type]){
		this.events[type].forEach(function(listener){
			listener();
		})
	}
}

module.exports = Emmiter;