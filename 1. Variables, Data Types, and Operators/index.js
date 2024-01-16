/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
console.log(myName)
var myName = "Linet"

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let urName = "Ruben"
console.log(urName)

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const itName = "Lilo"

// Checkpoint 1.1 What is the difference between var, let, and const?
/* Answer:
--var- are only scoped to the function in which they are declared. If declared outside of any function, the variable has global scope.

--let: Block-scoped. Variables declared with let are limited to the block (enclosed by curly braces) in which they are defined. This includes if statements, loops, and any other block structures.

--const: Also block-scoped. Like let, variables declared with const are block-scoped.*/

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
let num1 = 3;
let num2 = 19;
let num3 = 23;
console.log(num1 + num2); // Addition
console.log(num3 - num1); // Subtraction
console.log(num2 * num2); // Multiplication
console.log(num1 / num1); // Division
console.log(num3 % num2); // Modulus

// Checkpoint 1.2 What operators did you use?
// Answer: (+), (-), (*), (/), (%)
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let str1 = "Hi";
let str2 = "Baby";
console.log(str1 + " " + str2);

// Checkpoint 1.3 What operators did you use?
// Answer: (+)

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
let bool1 = true;
let bool2 = false;
console.log(bool1 && bool2); // AND
console.log(bool1 || bool2); // OR
console.log(!bool1); // NOT

// Checkpoint 1.4 What operators did you use?
// Answer: &&, ||, !


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
//Code Here:
let x = 5;
let y = 10;
console.log(x < y); // Less than
console.log(x > y); // Greater than
console.log(x <= y); // Less than or equal to
console.log(x >= y); // Greater than or equal to
console.log(x === y); // Equal to
console.log(x !== y); // Not equal to


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
/* Answer: [] == false evaluate to TRUE

"[]" is empty so it means its "false"

"==" means loose equality meaning it convert the operands

**[] == false becomes true** because The empty array [] is coerced to an empty string, which is considered falsy, resulting in a true comparison with the falsy value false. */
