// Abstraction in JavaScript involves hiding the implementation details of an object

//Using Functions:

function calculateTotalPrice(items) {
    let total = 0;
    items.forEach(item => {
      total += item.price;
    });
    return total;
}
  

// Using Objects:

const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    drive() {
      console.log('The car is driving.');
    }
};
  

//Using Classes
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
        
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }

  
// Using Modules:

    // math.js
    export function add(a, b) {
        return a + b;
    }
    
    // main.js
    import { add } from './math.js';
    console.log(add(2, 3));