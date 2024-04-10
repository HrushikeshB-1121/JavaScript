// Hosting
//          During compile phase, just microseconds before your code is executed, it is scanned for function and variable declarations.
//          All these functions and variable declarations are added to the memory inside a JavaScript data structure called Lexical Environment.
//          So that they can be used even before they are actually declared in the source code.


// lexical environment :
//         is a data structure that holds identifier-variable mapping. 
//         (here identifier refers to the name of variables/functions, 
//         and the variable is the reference to actual object [including function object] or primitive value).


// 1. Hoisting Function Declaration:
helloWorld();  // prints 'Hello World!' to the console              lexicalEnvironment = {
function helloWorld(){                                                      // helloWorld: </func>
  console.log('Hello World!');                                            // }
}



// 2. Hoisting Function Expressions:

//Example 1:
helloWorld();  // TypeError: helloWorld is not a function          
var helloWorld = function(){
  console.log('Hello World!');
}
// As JavaScript only hoist declarations, not initializations (assignments), 
// so the helloWorld will be treated as a variable, not as a function. Because helloWorld is a var variable, so the engine will assign is the undefined value during hoisting.

//Example 2:
var helloWorld = function(){
    console.log('Hello World!');  //prints 'Hello World!'
}
helloWorld();



// 3. Hoisting var variables:
console.log(a); // outputs 'undefined'      // lexicalEnvironment = { a: undefined }
var a = 3;                                  // lexicalEnvironment = { a: 3}
// JavaScript only hoist declarations, not initializations. That is, during compile time, 
// JavaScript only stores function and variable declarations in the memory, not their assignments (value).



// 4. Hoisting let and const variables:

// Example 1:
console.log(a);  //ReferenceError: a is not defined  // lexicalEnvironment = { a: <uninitialized> }
let a = 3; 
//  var declarations are initialized with undefined, 
// but, let and const declarations remain uninitialized.

// let and const will only get initialized when their lexical binding (assignment) is evaluated during runtime by the JavaScript engine. 
// This means you can’t access the variable before the engine evaluates its value at the place it was declared in the source code. This is what we call “Temporal Dead Zone”,
//  A time span between variable creation and its initialization where they can’t be accessed.

// Example 2:
let a;                  // lexicalEnvironment = { a: undefined }
console.log(a); // outputs undefined
a = 5;

// Example 3:
function foo () {
    console.log(a);
  }
  let a = 20;
  foo();  // This is perfectly valid

// Example 4:
function foo() {
    console.log(a); // ReferenceError: a is not defined
   }
   foo(); // This is not valid
   let a = 20;



// 5. Hoisting Class Declaration

// Example 1: 
let peter = new Person('Peter', 25); // ReferenceError: Person is not defined
console.log(peter);
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Example 2:
class Persons {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  let syam = new Persons('syam', 25); 
  console.log(syam);
  // Person { name: 'syam', age: 25 }



//  6. Hoisting Class Expressions

// Example 1:
let manju= new Personss('manju', 25); // ReferenceError: Person is  
                                     // not defined
console.log(peter);
let Personss = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Example 2:
let Personsss = class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  let Adarsh = new Personsss('Adarsh', 25); 
  console.log(peter);
  // Person { name: 'Peter', age: 25 }
