// Encapsulation involves bundling data (variables) and methods (functions)


function Person(name, age) {
    let _name = name; // private variable
    let _age = age; // private variable

    this.getName = function() {
        return _name;
    };

    this.getAge = function() {
        return _age;
    };

    this.setAge = function(newAge) {
        if (typeof newAge === 'number' && newAge > 0) {
            _age = newAge;
        } else {
            console.error('Age must be a positive number.');
        }
    };
}

const person1 = new Person('syam', 30);
console.log(person1.getName()); // Output: "syam"
console.log(person1.getAge()); // Output: 30
person1.setAge(35);
console.log(person1.getAge()); // Output: 35

// function Counter() {
//     let count = 0;
    
//     this.increment = function() {
//       count++;
//     };
    
//     this.getCount = function() {
//       return count;
//     };
//   }
  
//   const counter = new Counter();
//   counter.increment();
//   console.log(counter.getCount()); 
  

// const counter = (function () {
//     let privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
  
//     return {
//       increment() {
//         changeBy(1);
//       },
  
//       decrement() {
//         changeBy(-1);
//       },
  
//       value() {
//         return privateCounter;
//       },
//     };
//   })();
  
//   console.log(counter.value()); // 0.
  
//   counter.increment();
//   counter.increment();
//   console.log(counter.value()); // 2.
  
//   counter.decrement();
//   console.log(counter.value()); // 1.
  

// Using Constructor Functions:

// function Person(name, age) {
//     let _name = name;
//     let _age = age; 
  
//     this.getName = function() {
//       return _name;
//     };
  
//     this.getAge = function() {
//       return _age;
//     };
//   }
  
//   const person = new Person('John', 30);
//   console.log(person.getName());
//   console.log(person.getAge());  
  


// class Person {
//     #name; 
//     #age;  
  
//     constructor(name, age) {
//       this.#name = name;
//       this.#age = age;
//     }
  
//     getName() {
//       return this.#name;
//     }
  
//     getAge() {
//       return this.#age;
//     }
//   }
  
//   const person = new Person('syam', 30);
//   console.log(person.getName()); 
//   console.log(person.getAge());
