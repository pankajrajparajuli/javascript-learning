// Arthemetic Operators
let a = 10;
let b = 3;

let sum = a + b;          // Addition
let difference = a - b;   // Subtraction
let product = a * b;      // Multiplication
let quotient = a / b;     // Division
let remainder = a % b;    // Modulus
let exponentiation = a ** b; // Exponentiation a raised to the power of b

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Exponentiation:", exponentiation);

// Comparison Operators
let x = 5;
let y = '5';

console.log("x == y:", x == y);       // Equal to
console.log("x === y:", x === y);     // Strict equal to
console.log("x != y:", x != y);       // Not equal to
console.log("x !== y:", x !== y);     // Strict not equal to
console.log("x > y:", x > y);         // Greater than
console.log("x < y:", x < y);         // Less than
console.log("x >= y:", x >= y);       // Greater than or equal to
console.log("x <= y:", x <= y);       // Less than or equal to

// Logical Operators
let p = true;
let q = false;

console.log("p && q:", p && q); // Logical AND
console.log("p || q:", p || q); // Logical OR
console.log("!p:", !p);         // Logical NOT

// Assignment Operators
let c = 10;

c += 5;  // c = c + 5
console.log("c after += 5:", c); // 15

c -= 3;  // c = c - 3
console.log("c after -= 3:", c);  // 12

c *= 2;  // c = c * 2
console.log("c after *= 2:", c);  // 24

c /= 4;  // c = c / 4
console.log("c after /= 4:", c); // 6

c %= 3;  // c = c % 3
console.log("c after %= 3:", c); // 0

// String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// Typeof Operator
console.log("Type of fullName:", typeof fullName);
console.log("Type of a:", typeof a);
console.log("Type of p:", typeof p);