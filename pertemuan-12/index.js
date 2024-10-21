// rest parameter dan spread operator

//1. rest parameter

//tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) =>{
    console.log(param1, param2, param3, param4, param5);
}
func1("A", "B", "C", "D", "E");

//dengan rest parameter
const func2 = (...params) =>{
    console.log(params)
}

func2("A", "B", "C", "D", "E")

//rest parameter harus berada di terakhir dlm parameter
const func3 = (param1, param2, ...params) => {
    console.log(param1, param2);
    console.log(params)
};
func3("A", "B", "C", "D", "E");

//exercise
const penjumlahan = (...arr) =>{
    let hasil = 0;
    arr.forEach((item) => (hasil += item));
    return hasil
};

console.log(penjumlahan(1, 2, 3, 4, 5, 6));

//2. spread operator
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//array
//1. duplikasi array
let numbers2 = [numbers]
numbers.push(6);
console.log(numbers);
console.log(numbers2);

//2. menggabungkan array
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]

let numbers3 = arr.concat(arr2, arr3);
let numbers4 = [...arr1, ...arr2, ...arr3]

//obyek
//1. duplikasi object
const john = {
    fullName: "John Doe"
    age: 30
};

const john2 = {...john, address: "manado"}

//2. menggabungkan object

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let obj3 = {e: 5, f: 6};

let combineObj