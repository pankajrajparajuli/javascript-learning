let array = [1, 2, 3, 4, 5];
array[5] = 6; // Adding an element at index 5
array[0] = 11; // Adding an element at the end of the array
console.log("Array:", array);
console.log("Length of array:", array.length);// Accessing elements
console.log("First element:", array[0]);
console.log("Last element:", array[array.length - 1]);
console.log("Undefined:", array[6]); // undefined

for (let i = 0; i < array.length; i++) {
    console.log("Element at index", i, ":", array[i]);
}