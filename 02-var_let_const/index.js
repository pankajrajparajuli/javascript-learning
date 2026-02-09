console.log("JavaScript Variables: var, let, and const");

var message = "This is a var variable.";
console.log(message);

let count = 10;
console.log("Count:", count);

const gravity = 9.81;
console.log("Gravity:", gravity);

message = "The var variable has been updated.";
console.log(message);

count = 20;
console.log("Updated Count:", count);

// Uncommenting the next line will cause an error because const variables cannot be reassigned
// gravity = 10;