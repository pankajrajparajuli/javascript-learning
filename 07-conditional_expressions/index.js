let a = prompt("Enter a number:");
a = Number.parseInt(a)
console.log(a);

let b = prompt("Enter your age:");
b = Number.parseInt(b)
if (b<0) {
    alert("Invalid age")
}
else if (b<9) {
    alert("You are a kid")
}
else if (b<18) {
    alert("You are a teenager")
}
else if (b<60) {
    alert("You are an adult")
}
else if (b>60) {
    alert("You are a senior citizen")
}
else {
    alert("Invalid age")
}