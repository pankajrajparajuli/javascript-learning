for(let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

let object = {
    pankaj: "88",
    raj: "90",
    parajuli: "95"
}

for(let key in object) {
    console.log(key);
    console.log(key, ":", object[key]);
}

for(char of "Pankaj") {
    console.log(char);
}