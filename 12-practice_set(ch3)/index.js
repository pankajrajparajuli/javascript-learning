let marks = {
    pankaj: 88,
    raj: 90,
    parajuli: 95
}
for(let key in marks) {
    console.log("The marks of",key,"i ", ":", marks[key]);
}

let correct_number = 11;
let i
while(i!= correct_number){
    i = prompt("Enter a nummer")
}
alert("you have entered a correct number")


const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}

console.log(mean(1,2,3,4));