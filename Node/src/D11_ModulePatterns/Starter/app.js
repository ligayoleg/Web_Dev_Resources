let greet = require('./greet1');
greet();

let greet2 = require('./greet2').greet;
// greet2.greet();
// or
// add .greet when declaring variable greet2
greet2();

//call a function of an object
let greet3 = require('./greet3');
greet3.greet(); //<-- can not create another object because it passes the value by reference of that object

//have the ability to create a new object
let Greet4 = require('./greet4');
let grtr = new Greet4(); // <-- because greet4 is a constructor function
grtr.greet();


let greet5 = require('./greet5').greet;
greet5();


