// // Abstraction in JavaScript involves hiding the implementation details of an object

// Using Functions:

// Abstraction through encapsulation

function Counter() {
    let count = 0;

    this.increment = function() {
        count++;
    };

    this.getCount = function() {
        return count;
    };
}

const myCounter = new Counter();
myCounter.increment();
console.log(myCounter.getCount()); // Output: 1

// Abstraction through module pattern
const calculator = (function() {
    let result = 0;

    function add(num) {
        result += num;
    }

    function subtract(num) {
        result -= num;
    }

    function getResult() {
        return result;
    }

    return {
        add,
        subtract,
        getResult
    };
})();

calculator.add(5);
calculator.subtract(2);
console.log(calculator.getResult()); // Output: 3