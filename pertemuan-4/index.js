//javascript Function
//cara 1.
// tanpa input(parameter) dan output

// function greetings1(){
//     console.log("Hello World")
// }
// greetings1()

// //cara 2
// let greetings2 = function(){
//     console.log("Hello world")
// }
// greetings2() //call function

// parameter dan argumen
//dengan input dan output (return value)
//
function greetings1(fullName) {
    return "Hello" + fullName
}
//                      Argument
let output1 = greetings1("John Doe")
console.log(output1)

let greetings2 = function(fullName){
    return "Hello" + fullName
}
let output2 = greetings2("John Doe")
console.log(output2)

// global & local Scope

let x = 10

function foo() {
    let y = 20 // local
    let z = 30
    console.log(x) //10
    console.log(y) //20
    if (z > x) {
        let a = 40 //block scope
        console.log(a) 
    }
    console.log(a)
}
