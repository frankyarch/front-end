//1. IIFE (Immediately Invoked Function Expression)

//no params & args & reetrun
// (function () {
//     console.log("Telasooo")
// })()

// let output = (function (fullName){
//     console.log("Hello" + fullName)
// })("John Doe")

// console.log(output)

//callback no params & args & return
function sayHello(callback){
    callback()
}

sayHello (function () {
    console.log("Hello callback function")
})

//with params & args & return
function sayHello(callback){
    let output = callback("john doe")
    return output
}

let output = sayHello (function (fullName) {
    return "Hello " + fullName
})

console.log(output)