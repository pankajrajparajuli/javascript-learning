let array = [1, 2, 3, 4, 5];
delete array[2]; // Deleting the element at index 2
console.log("Array after deletion:", array);
console.log("Length of array after deletion:", array.length); // Length remains the same

let array2 = [6, 7, 8, 9, 10];
let array3 = [11, 12, 13, 14, 15];


array.concat(array2,array3); // Concatenating array2 to array
console.log("Array after concatenation:", array); // Original array remains unchanged

let newArray = array.concat(array2, array3); // Storing the result of concatenation in a new variable
console.log("New Array after concatenation:", newArray); // New array contains the concatenated values

let newArray2 = [...array, ...array2, ...array3]; // Using spread operator to concatenate arrays
console.log("New Array using spread operator:", newArray2); // New array contains the concatenated values

//sort
let unsortedArray = [5, 2, 9, 11, 5, 6];
unsortedArray.sort(); // Sorting the array in place alphabetically (default behavior)
console.log("Sorted Array:", unsortedArray); // Sorted array

const comparator = (a, b) => {
    return a - b; // Comparator function for numerical sorting
};
unsortedArray.sort(comparator); // Sorting the array in place using the comparator function
console.log("Numerically Sorted Array:", unsortedArray); // Numerically sorted array

//reverse
unsortedArray.reverse(); // Reversing the sorted array in place
console.log("Reversed Array:", unsortedArray); // Reversed array

//splice and slice

let spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 1); // Removing 1 element at index 2
console.log("Array after splice (removal):", spliceArray); // Array after removal

spliceArray.splice(2, 0, 6); // Adding 6 at index 2 without removing any element
console.log("Array after splice (addition):", spliceArray); // Array after addition

let slicedArray = spliceArray.slice(1, 4); // Slicing the array from index 1 to 3 (4 is not included)
console.log("Sliced Array (1 to 4):", slicedArray); // Sliced array
console.log("Original Array after slicing:", spliceArray); // Original array remains unchanged