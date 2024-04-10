// Inheritance inherit properties and methods from other objects,

// Prototype Chaining:

//Constructor Function Inheritance:
//Parent constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Add method to parent prototype
  Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound.');
  };
  
  // Child constructor function
  function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
  }
  
  // Usage
  const animal = new Animal('Animal');
  const dog = new Dog('Buddy', 'Golden Retriever');
  
  // Usage
  animal.speak(); 

// // Parent constructor function
// function Animal(name) {
//     this.name = name;
//   }
  
// // Add method to parent prototype
//   Animal.prototype.speak = function() {
//     console.log(this.name + ' makes a sound.');
//   };
  
// // Child constructor function
//   function Dog(name, breed) {
//     Animal.call(this, name); // Call parent constructor
//     this.breed = breed;
//   }
  
// // Set up prototype chain
//   Dog.prototype = Object.create(Animal.prototype);
//   Dog.prototype.constructor = Dog;
  
// // Add method to child prototype
//   Dog.prototype.bark = function() {
//     console.log(this.name + ' barks.');
//   };
  
// // Create instances
//   const animal = new Animal('Animal');
//   const dog = new Dog('Rio', 'Golden Retriever');
  
// // Usage
// animal.speak();
// dog.speak();   
// dog.bark();    
  

// inheritance using the extends keyword 
  
// Superclass
// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       console.log(this.name + ' makes a sound.');
//     }
//   }
  
//   // Subclass
//   class Dog extends Animal {
//     constructor(name, breed) {
//       super(name); // Call superclass constructor
//       this.breed = breed;
//     }
  
//     bark() {
//       console.log(this.name + ' barks.');
//     }
//   }
  
//   // Usage
//   const animal = new Animal('Animal');
//   const dog = new Dog('Rio', 'Golden Retriever');
  
//   // Usage
//   animal.speak(); 
//   dog.speak();    
//   dog.bark();