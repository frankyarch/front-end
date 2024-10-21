//array & object
//1. array
//deklarasi variable array
//cara 1. array literal
// let numbers = [1, 2, 3, 4, 5]
// console.log(numbers)

// //cara 2. kata kunci New
// let numbers2= new Array(6, 7, 8, 9, 20 )
// console.log(numbers2)

//tipe data dalam array
let numbers = [1, 2, 3, 4, 5] //number
let students = ["John", "Jane", "Bob"]
let john = ["John", 30, true, [80, 90, 100]]
console.log(john)

//array lengsh
console.log(numbers.length)
console.log(students.length)
console.log(john.length)

console.log(numbers[2])
console.log(students[1])
console.log(john[3])
console.log(john[3] [1])

//mengakses elemen terakhir dalam array
let numbers = []
console.loh(numbers[numbers.length - 1])

//array method
let array = [1, 2, 3, "hallo", false, true]
console.log(array)

console.log(array.toString())
//2. join
console.log(array.join(" "))
console.log(array.join("-"))
//3.pop
array.pop()
console.log(array)
//4.push
array.push("Selamat pagi")
console.log(array)
//5. shift()
array.shift
console.log(array)
//6. unshift
array.unshift
console.log(array)
//7. splice
array.splice(3, 0, 4, 5)
console.log(array)
//8. concat
let buah = ["pisang", "apel", "jeruk"]
let sayur = ["tomat", "bayam", "wortel"]
let biji = 