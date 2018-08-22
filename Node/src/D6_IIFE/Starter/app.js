//EXAMPLE of IEFE
(function (lastname){

	let firstname = 'John';
	console.log(firstname);
	console.log(lastname);

}
('Doe') // <-- invoke right after creating a function 
);

let firstname = 'Jane';
console.log(firstname); 