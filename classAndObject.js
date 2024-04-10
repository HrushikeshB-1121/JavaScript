// class 

// class Person {
//     eat() {
//         console.log("Eat");
//     }
// }

// const p1 = new Person();
// p1.eat();


// class Employee {
//     name;
    
//     constructor(name) {
//         this.name = name;
//     }
    
//     introduce() {
//         console.log(`Hi! I'm ${this.name}`);
//     }
// }


// const e1 = new Employee("syam");

// e1.introduce();


// // objects
// const person = {
//     name: ["manju", "Sanju"],
//     age: 23,
//     details() {
//       console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduce() {
//       console.log(`Hi! I'm ${this.name[0]}.`);
//     },
//   };
  
  
//   person.name;
//   person.name[0];
//   person.age;
//   person.details();
//   person.introduce();  



// Inheritance

class Person{
    work(){
        console.log("does nothing");
    }
}
class Engineer extends Person {
  
   work(){
    console.log("solves problems");
   }
}
  
let manju = new Person();
manju.work();
let syam = new Engineer();
syam.work();


