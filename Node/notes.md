    			Notes to Node.js

Command Line Interface - An utility to type commands to your computer rather than clicking around with a mouse.
o Bash on Linux
o Terminal on Mac
o Command Prompt on Windows
o etc.
Arguments � values you give your program that affect how it runs. Essentially passing parameters to a function.

     V8 JS Engine

- Processors: microprocessor is a tiny machine that works in sync with electrical inputs and does a job. It speaks the language, we give instructions, is is going to get those instructions by understanding a language(IA-32, X86-64, ARM, MIPS).
- Machine code: programming language spoken by computer processors. Every computer program is converted into machine code.
- JS -> C/C++ -> Assembly language -> Machine Language -> microprocessor
- Node is written in C++
  o We as developers write in JS.
  o Node itself written in C++, as V8.

       JS engines and ECMA script specs

- The standard js is based on. Needed a standard since there are many engines. It is a name of base/ core engine JS is based on.
- A JS engine � a program that converts a program that converts JS code into something the computer processor can understand. And it should follow the ECMAScript standard on how the language should work and what features it should have.
  V8 under the hood
- Chrome v8 was built for Google chrome
- .cc and .h are part of C++ language.
- Date for example; there is a C++ that executes JS.
- V8 can run stand alone or be embedded into any C++ application.
- JS -> My C++ program(V\*(C++)) -> Machine Code.
  o It can work as a trigger. If someone writes in JS, my C++ code would be executed.
  Node.js is a C++ program with V8 embedded that is added a wealth of great features that makes it suaitable to be a server technology.
  Servers and clients
- Server � computer that performs services
- Client � asks for those services
- Client -> request -> Server
- Server -> response -> Client
- HTTP request and response

What does JS need to manage a server?

- Better ways to organize our code into reusable pieces
- Ways to deal with files
- Ways to deal with databases
- The ability to communicate over the internet
- The ability to accept requests and send responses
- A way to deal with work that takes a long time

- Breakpoint � a spot in our code where we tell a debugging tool to pause a debugging tool to pause the execution of our code, so we can figure out what�s going on�

- Module � a reusable block of code whose existence does not accidentally impact other code. JS did not have this before.

- Common JS Modules � an agreed upon standard for how code modules should be structured.

First class functions and function expressions:

- First-class functions � everything you can do with other types you can do with functions. You can use functions like strings, number, etc. (i.e. pass them around, set variables equal to them, put them in arrays, and more).
- An expression � a block of code that results in a value. Function expressions are possible in JS because functions are first-class.
- Invoke � run the function. We can also say �call� the function.

Objects and object literals

- Name/value pair: a name which maps to a value. The name may be defined more than once, but only can have one value in any given context. That value may be more name/ value pairs.
- Object � a collection of name/ value pairs. The simplest definition when talking about JS.
- Object literal � name/ value pairs separated by commas and surrounded by curly braces. This is just a quick, shorthand way to create JS objects in code.

Prototypal Inheritance and Function Constructors

- Inheritance � one object gets an access to the properties and methods of another object.
- Function constructors � a normal function that is used to construct objects. The �this� variable points a new empty object, and that object is returned from the function automatically.

Reference and value

- Primitive � a type of data that represents a single value. Like a number or a string. In other words, not an object.
- Pass-by-reference - means that variable inside the function points to the same space in memory that object located in, instead of copying it like with primitive data types. So when you change one, you change the other.

Immediately Invoked Function Expressions (IIFEs)

- Scope � where in code you have access to particular variable or function.

JSON

- JSON � �Javascript Object Notation� � a standard for structuring data that is inspired by JS object literatls. JS engines are build to understand it.
  o Example:
- {
- �firstname� : �John�,
- �lastname� : �Doe�,
- �address� : {
-                 �street� : � 101 Main St.�,
-                 � city� : �New York�,
-                �state� : �NY�
-              }
- }
  Module Patterns (D11)
- There is no the RIGHT way to create modules, it�s an architectural choice.
- Greet1(greet1.js):
  o Create a module.exports and assign a function to it, which will overwrite the muodule.exports with a function. Then require it in a main .js file by assigning it to a variable and call it like any function.
- Greet 2 (greet2.js) :
  o This time, instead of replacing the object with a function, we add a property to module.exports => module.exports.greet, and assign a function. So instead of replacing the object, we assigned a method to a module.exports.
  o In the main file, when assigning require to a variable, there are two ways of calling .export object from a greet2.js file:
- Because module.exports in greet2.js is an object, we can call it with greet2.greet();
- Or what�s much more common is to say explicitly what it is that I am looking for coming off of the module.exports object when it comes to these methods.
- let greet = require(�./greet�).greet;
  o When you see that .something after require, we are reaching down into that module.exports object and getting a particular property or method.
- Greet 3 (greet3.js):
  o Instead of methods 1 and 2, I will replace exports with my own object.
  o In order to do that, we need to use an object constructor y creating a function.
  o After that I can module.exports new Object
  o In app.js I can call the assigned to require variable and complete it with .greet();
  o However, because Object is reference type value, if we require the same object and assign it to different variable, that variable is going to point at the same constructor and change it.

/=========REQUIRE==============/
The require function does more than pulling modules. Module is cached so it looks at file name and cache it. But it also asks if module is Native.

Native module is a JS core file. Modules that already given to us.

On node.js website there are APIs that we can brush up on.

If we want to use native core files, we don't have to use ./ notation, becuase ./ tells computer to look into the folder. Not using ./ tells computer that we are going to require to have some native core files.

/======= THE NODE EVENT EMMITER PART 1 =====/

- Event Listener: the code that responds to an event. In JS case, the listener will be a function. And we can have many listeners for the same event, which will be invoked one at a time.
-

o I am emitting events, like you emit rays of light. I am emitting an event, and whoever is listening for it, can respond.
o So I?ll say emit a particular type of event, if I have that property

- If(this.events[type])
  o Then I will take that property which will be an array, loop through it, and execute.
  o And if it is, it?s going to be an array and then I loop through to see if there?s any functions in that array, and then I just execute them, I just invoke them, that?s all I do.
  o And if I was listening for file was saved, I would have called on and said file was saved as a stringto make sure that is a property on the object and I would have added my function to it.
- Al right the last thing I need to do is make this available:
  o Module.exports = Emitter;
  o So the function constructor will come back from the require function, so I can create as many emitter as I want. Let?s try using it.

/======= THE NODE EVENT EMITTER PART 2 =====/

- Magic String: A string that has some special meaning in our code. This is bad because it makes it easy for a typo to cause a bug, and hard for tools to help use find it.
- So instead of relying on using strings as a ?type? for emitting and listening, it is more practical to create another module and export an objects with all available properties of that object assigned to a string, like GREET : ?greet?. That way if the bug occurs, it would be easier to identify and troublehoot it.
-

/======= JS ASIDE: OBJECT.CREATE AND PROTOTYPE =====/

- you?ll remember that we talked about prototypal inheritance in JS, that meant that we can have an object, that might have a property that we can call but every obkect can also has a prototype, which is another object that it points to as it?s prototype, which may have different properties. And then, we can still access those properties on that prototype directly.
- And the prototype has it?s own prototype. And anywhere down that chain, the prototype chain. We can access those properties and methods of any of the objects along the prototype chain. And that is how JS accomplishes the idea of inheritance.
