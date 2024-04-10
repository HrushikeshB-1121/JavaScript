//scope

//Global Scope: 

var globalVariable = "I am global";

function foo() {
    console.log(globalVariable); // Output: "I am global"
}


//Local Scope: 

function foo() {
    var localVariable = "I am local";
    console.log(localVariable); // Output: "I am local"
}
foo();
console.log(localVariable); // Error: localVariable is not defined

//ex 2

function foo() {
    var x = 10;
    if (true) {
        var y = 20;
        console.log(x); // Output: 10
    }
    console.log(y); // Output: 20
}
foo();
console.log(x); // Error: x is not defined
console.log(y); // Error: y is not defined


//ex 3

function foo() {
    let x = 10;
    if (true) {
        let y = 20;
        console.log(x); // Output: 10
    }
    console.log(y); // Error: y is not defined
}
foo();
console.log(x); // Error: x is not defined








//Events

// when the element with the ID "myButton" is clicked, 
//the anonymous function provided as the second argument will be executed, showing message "Button clicked!".
// document.getElementById("myButton").addEventListener("click", function() {
//     alert("Button clicked!");
// });
