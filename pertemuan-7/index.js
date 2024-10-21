let john = {
    firstName: "john",
    age: 30,
    isMarried: true
    grade: [80, 90, 100],
    sayGreetings: function(){
        console.log("Hello my name is " + this.function)
    },
    address: {
        street: "Jl sam ratulangi",
        city : "manado",
        province: "North sulawesi",
        postalCode: 95371,
    }
}
console.log(john)
let jane = new Object()


//cara2. kata kunci new
let jane = new Object()
jane.firstName = "Jane",
jane.age = 20
jane.isMarried = true
console.log(jane)

//cara mengakses properti dalam object
//dot notation
console.log(john.firstName)
console.log(john.age)
john.age = 31
console.log(john.age)
john.job = "Teacher"
console.log(john)

//bracket notation
console.log(john["isMarried"])
john["nationality"] = "Indonesia"
console.log(john)

//object method
john.sayGreetings()

//object inside object
console.log(john.address.city)

//delete property dalam object
delete john.grade

//javascript conditional
// if-else
let numbers = 10
if(numbers % 2 === 0){
    console.log("bilangan genap")
} else {
    console.log("bilangan ganjil")
}

//2. if else

let nilai = 50
if (nilai >= 80 && nilai <= 100) {
    console.log("grade A")
} else if (nilai >= 60 && nilai < 80) {
    console.log("grade B")
} else {
    console.log("grade C")
}

//switch - case
let month = 1
switch(month) {
    case 1:
        console.log("january")
        break
    case 2:
        console.log("febuary")
        break
    case 3:
        console.log("maret")
        break
    default:
        console.log("not found")
        break
}