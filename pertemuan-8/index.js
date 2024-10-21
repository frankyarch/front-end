//javascript loop 
//1. for loop
// for(i=1; i<=10; i++){
//     console.log(i)
// }

//2. while loop
// let i = 1
// while(1 <= 10){
//     console.log(i)
//     i++
// }

//3. do-while loop
// let i = 1
// do {
//     console.log(i)
//     i++
//     while (i <= 10)
// }

// Array built-in method
// let numbers = [1, 2, 3, 4, 5]
// console.log(numbers)

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// array object
let students = [
    {
        id: 1,
        firstName: 'John',
        isActive: true,
        grade: 80,
    },
    {
        id: 2,
        firstName: 'Jane',
        isActive: false,
        grade: 90,
    },
    {
        id: 3,
        firstName: 'Bob',
        isActive: false,
        grade: 100,
    }
]

// for(let i=0; i<students.length; i++) {
//     console.log(students[i])
// }

//1. forEach()
// students.forEach(function(item, index) {
//     console.log(item)
//     console.log(item.firstName)
// })

//2. map()
let output = students.map(function(item){
    return item;
})
console.log(output)

//3. filter()
// let filteredStudent = students.filter(function(item){
//     return item.grade > 80
// })

let index = co