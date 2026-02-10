let array = [1, 2, 3, 4, 5];
let string = array.toString();
console.log("Array to String:", string);

let joinedString = array.join("-");// Joins array elements with a hyphen
console.log("Joined Array with '-':", joinedString);

let newArray = string.split(",");// Splits the string back into an array using comma as a separator
console.log("String to Array:", newArray);

let slicedArray = array.slice(1, 4);// Slices the array from index 1 to 3 (4 is not included)
console.log("Sliced Array (1 to 4):", slicedArray);

array.push(6);// Adds 6 at the end of the array
console.log("After Push:", array);

array.pop();// Removes the last element (6 in this case)
console.log("After Pop:", array);

array.unshift(0);// Adds 0 at the beginning of the array
console.log("After Unshift:", array);

array.shift();// Removes the first element (0 in this case)
console.log("After Shift:", array);

let indexOf3 = array.indexOf(3);// Finds the index of the first occurrence of 3 in the array
console.log("Index of 3:", indexOf3);

let includes4 = array.includes(4);// Checks if the array includes the value 4
console.log("Includes 4:", includes4);

let reversedArray = array.reverse();// Reverses the order of the elements in the array
console.log("Reversed Array:", reversedArray);