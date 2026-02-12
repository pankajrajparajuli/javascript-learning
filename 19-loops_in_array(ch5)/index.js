let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log("Element at index", i, "is", array[i]);
}

// For each loop

array.forEach((element, index) => {
    console.log("Element at index", index, "is", element);
});

// For of loop

for (let element of array) {
    console.log("Element:", element);
}

// For in loop (not recommended for arrays, but works)

for (let index in array) {
    console.log("Element at index", index, "is", array[index]);
}






