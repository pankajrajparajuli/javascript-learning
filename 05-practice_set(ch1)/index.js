// Create a string variable and add numbers to it
let str = "The number is: ";
str += 42; // This will concatenate the number to the string
console.log(str); // Output: "The number is: 42"

let a = "Pankaj";
let b = 20;
let sum = a + b; // This will perform concatenation
console.log("The sum of a and b is:", sum); // Output: "The sum of a and b is: Pankaj20"

// type of operator
console.log("Type of str:", typeof str); // Output: "Type of str: string"
console.log("Type of a:", typeof a); // Output: "Type of a: string"
console.log("Type of b:", typeof b); // Output: "Type of b: number"
console.log("Type of sum:", typeof sum); // Output: "Type of sum: string"

const test = "Hello";
console.log(test);
test = "World"; // This will cause an error because test is a constant
