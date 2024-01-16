/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
let firstItem = numbers[0];
let fifthItem = numbers[4];
let lastItem = numbers[numbers.length - 1];
console.log(firstItem, fifthItem, lastItem);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);
let averageValue = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
console.log('Min:', minValue, 'Max:', maxValue, 'Average:', averageValue);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Lists in Python and arrays in JavaScript are similar in many ways. Both are ordered collections of elements, support indexing, and have various built-in methods for manipulation. However, there are syntax and feature differences. For example, Python lists use square brackets for indexing, while JavaScript arrays use square brackets as well. Python lists can contain elements of different types, while JavaScript arrays typically contain elements of the same type.


// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
let it114lObject = {
    courseCode: 'IT114L',
    name: 'Introduction to Programming Lab',
    units: 3,
    numberOfStudents: 40
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
it114lObject.professor = 'Job Lipat';
console.log(it114lObject.professor);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let courses = [
    { courseCode: 'CS120', name: 'STRUCTURE OF PROGRAMMING LANGUAGES', units: 3 },
    { courseCode: 'HUM039', name: 'ETHICS', units: 3 },
    { courseCode: 'IT133', name: 'TECHNOPRENEURSHIP', units: 3 }
];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits = courses.reduce((acc, course) => acc + course.units, 0);
console.log('Total Units:', totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: The equivalent of objects in Python is dictionaries. Both objects in JavaScript and dictionaries in Python are used to store key-value pairs and support various operations like adding, removing, and accessing elements.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let numbersCopy = [...numbers, 99];
console.log('Numbers Copy:', numbersCopy);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let { courseCode: itCourseCode, units: itUnits } = it114lObject;
console.log('IT Course Code:', itCourseCode, 'IT Units:', itUnits);
