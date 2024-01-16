/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squares = numbers.map(num => num ** 2);
console.log(squares);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const uppercaseWords = words.map(word => word.toUpperCase());
console.log(uppercaseWords);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const longWords = words.filter(word => word.length > 4);
console.log(longWords);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here

// Checkpoint 5.1 Summarize what map, filter, and reduce do
/* Answer: 
--- map: Transforms each element in an array based on a provided function and creates a new array with the transformed values.

--- filter: Selects elements from an array that satisfy a specified condition and creates a new array with those selected elements.

--- reduce: Condenses an array into a single value by applying a specified function to each element and accumulating the result.*/
