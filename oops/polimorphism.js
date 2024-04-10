// Polymorphism refers to exhibit different behaviors 
// Polymorphism is typically achieved through method overriding,

//Method Overriding:

// class Animal {
//     speak() {
//       console.log('Animal makes a sound.');
//     }
//   }
  
//   class Dog extends Animal {
//     speak() {
//       console.log('Dog barks.');
//     }
//   }
  
//   const animal = new Animal();
//   const dog = new Dog();
  
//   animal.speak(); 
//   dog.speak();    

// Using the Same Interface:
  
// function makeSound(animal) {
//     animal.speak(); // Calls the speak method on the animal object
//   }
  
//   const animal = {
//     speak() {
//       console.log('Animal makes a sound.');
//     }
//   };
  
//   const dog = {
//     speak() {
//       console.log('Dog barks.');
//     }
//   };
  
//   makeSound(animal); 
//   makeSound(dog);   
  

// Dynamic Binding:

// class Animal {
//     speak() {
//       console.log('Animal makes a sound.');
//     }
//   }
  
//   class Dog extends Animal {
//     speak() {
//       console.log('Dog barks.');
//     }
//   }
  
//   const animal = new Animal();
//   const dog = new Dog();
//   let someAnimal = Math.random() > 0.5 ? animal : dog;
  
//   someAnimal.speak();