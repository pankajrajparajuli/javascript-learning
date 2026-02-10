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
let name = "Alice";
{
    let name = "Bob";
    console.log("Name inside block:", name);
}
console.log("Name:", name);
// var is function-scoped, while let and const are block-scoped.

var age = 30;
{
    var age = 40;
    console.log("Age inside block:", age);
}
console.log("Age:", age);

// In the above example, the var variable 'age' is redeclared and updated inside the block, affecting the outer variable. In contrast, if we had used let or const, the inner variable would not affect the outer variable.