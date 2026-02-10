let name = "Pankaj";
console.log(name.length); // Output: 6
console.log(name.toUpperCase()); // Output: "PANKAJ"
console.log(name.toLowerCase()); // Output: "pankaj"
console.log(name.includes("ka")); // Output: true
console.log(name.startsWith("Pan")); // Output: true
console.log(name.endsWith("aj")); // Output: true
console.log(name.indexOf("k")); // Output: 3
console.log(name.slice(1, 4)); // Output: "ank"
console.log(name.replace("P", "B")); // Output: "Bankaj"

let friend1 = "Alice";
let friend2 = "Bob";
let greeting = `Hello, ${friend1} and ${friend2}!`; // Template literal
let greeting2 = "Hello, " + friend1 + " and " + friend2 + "!"; // String concatenation
console.log(greeting); // Output: "Hello, Alice and Bob!"
console.log(greeting2); // Output: "Hello, Alice and Bob!"

//Escape characters
let quote = "She said, \"Hello!\""; // Using backslash to escape double quotes
console.log(quote); // Output: She said, "Hello!"
let path = "C:\\Users\\Pankaj\\Documents"; // Using backslash to escape backslashes
console.log(path); // Output: C:\Users\Pankaj\Documents