// Your Javascript Code Goes Here
// First Class Functions - everything you can do with other types you can do with functions
/* 
    you can use functions like strings, numbers, etc. (i.e. pass them around, set variables equal to them, put the in arrays, and more.)

    An EXPRESSION - a block of code that results in a value.
*/

function greet(){
    console.log("Hola");
}

//first class function
function logGreeting(fn){
    fn();
}
logGreeting(greet);

//function expression
var greetMe = function (){
    console.log("Greeting");
}

greetMe();
logGreeting(greetMe);