/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(Linet) {
    console.log(`Hello, ${Linet
    }!`);
  }
  greet('Linet');

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: A function declaration is like a statement that says, "Hey, I'm a function," and it's recognized throughout the entire code. On the other hand, a function expression is more like an assignment, creating a function when the code execution reaches that line, and it only exists from that point onward.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
const calculateArea = function(length, width) {
    return length * width;
}
console.log(calculateArea(5, 8));

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a function that is passed as an argument to another function and is executed after the completion of some asynchronous operation or at a specified time.

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
function modifyArray(array, modifierFunction) {
    return array.map(modifierFunction);
}

const numbers = [1, 2, 3, 4, 5];
const incrementByOne = function(num) {
    return num + 1;
};

// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here:
const modifiedNumbers = modifyArray(numbers, incrementByOne);
console.log(modifiedNumbers);


// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
const mathUtils = require('./mathUtils');
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
console.log(mathUtils.add(3, 4));
console.log(mathUtils.PI);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const isPalindrome = require('./isPalindrome');
console.log(isPalindrome("radar"));

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
/* Answer: 
The `require` function is used in Node.js to import modules, and `module.exports` is a variable used to define the exported content of a module.

In Node.js environments or CommonJS modules, the require function and module.exports variable are used over the import and export keywords because they are part of the CommonJS module system, providing compatibility and adherence to Node.js conventions.*/
