let array = [11, 22, 33, 44, 55];

// Map method
let mappedArray = array.map(element => element * 2); // Creating a new array by multiplying each element by 2
console.log("Mapped Array (each element multiplied by 2):", mappedArray); // New array with modified values

// Filter method
let filteredArray = array.filter(element => element > 30); // Creating a new array with elements greater than 30
console.log("Filtered Array (elements greater than 30):", filteredArray); // New array with filtered values

// Reduce method
let reducedValue = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Reducing the array to a single value (sum of all elements)
console.log("Reduced Value (sum of all elements):", reducedValue); // Single value resulting from reduction