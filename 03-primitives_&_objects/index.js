console.log("JavaScript Primitives and Objects");

// Primitives (nn bb ss u)
let str = "Hello, World!";
let num = 42;
let bool = true; // Boolean
let undef;
let nul = null;
let sym = Symbol("unique");
let bigInt = 9007199254740991n;

// Logging primitive values
console.log(str, num, bool, undef, nul, sym, bigInt);

// Type checking
console.log("Type of str:", typeof str);
console.log("Type of num:", typeof num);
console.log("Type of bool:", typeof bool);
console.log("Type of undef:", typeof undef);
console.log("Type of nul:", typeof nul);
console.log("Type of sym:", typeof sym);
console.log("Type of bigInt:", typeof bigInt);

// Objects
// Key-value pairs

const person = {
    name: "Pankaj",
    age: 22,
    isStudent: false,
    hobbies: ["reading", "coding", "traveling"],
    address: {
        city: "PathariSanischare",
        country: "Nepal"
    }
};
// Adding a method to the person object
console.log("Person Object:", person);
console.log("Person's Name:", person.name);
console.log("Person's Age:", person.age);
console.log("Person's Hobbies:", person.hobbies);
console.log("Person's City:", person.address.city);
console.log("Person's Country:", person.address.country);

// Modifying object properties
person.name = "Pankaj Raj Parajuli";
person.age = 23;
person.address.city = "Kathmandu";
console.log("Updated Person Object:", person);