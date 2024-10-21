//asynchronous JS


//synchronous - single 
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yang memakan waktu yg lama");
// console.log("Proses 4");

//asynchronous - multi thread
//1.parallel
// setTimeout(() => {
//     console.log("Proses 1")
// }, 3000)
// console.log("proses 2")

//2.concurrent
// setTimeout(() => {
//     console.log("proses 1");
//     setTimeout(() => {
//         console.log("proses 2");
//         setTimeout(() => {
//             console.log("proses 3");
//             setTimeout(() => {

//             })
//         })
//     })
// })

//promise
let condition = true
let newPromise = new Promise((resolve, reject) => {
    if(condition){
        resolve("berhasil");
    } else {
        reject("gagal");
    }
})

// pakai promise
// 1. then - catch
newPromise
.then((result) => console.log(result))
.then((result2) => console.log(result2))
.catch((error) => console.log (error))

//2. async - await
//harus dibuat dalam fungsi

const consumePromise = async () => {
    let result = newPromise;
    console.log(result)
}

consumePromise()

//pakai promise yg sdh ada
//1.fetch
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((json) => console.log(json))

(async () => {
    let response = await
})