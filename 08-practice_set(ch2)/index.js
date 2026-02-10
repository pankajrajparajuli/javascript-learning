let age = prompt("Enter your age:");
if (age >=10 && age <20) {
    alert("Your age is between 10 and 20");
}
else {
    alert("Your age is not between 10 and 20");
}

let num = prompt("Enter a number:");
switch (num) {
    case '1':
        alert("You entered one");
        break;
    case '2':
        alert("You entered two");
        break;
    case '3':
        alert("You entered three");
        break;
    default:
        alert("You entered a number other than 1, 2, or 3");
}