
function greet(callback){
	console.log('Hello!');

	var data = {
		name :'Oleg Ligay'
	}
	callback(data);
}


greet(function (data){
	console.log("The callback was invoked!");
	console.log(data);
});

greet(function (data){
	console.log("The callback was invoked second time!");
	console.log(data.name);
});

