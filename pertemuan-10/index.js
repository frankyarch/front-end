

//1. string literal
let fullName = "John Doe";
let age = 33;
let address = "Manado";

//ha

let kalimat = "Halo nama saya " + fullName +


//2. arrow function
function sayGreetings(fullName){
    return 'Hello ${fullName}'
}

console.log(sayGreetings("John Doe"))

const sayGreetings2 = (fullName) => {
    return 'Hello ${fullName}';
}

console.log(sayGreetings2("John Doe"))