// // a. Membuat function helloWorld dengan Promise
// function helloWorld() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello World!");
//       }, 2000);
//     });
//   }
  
//   // b. Membuat async function messages dan menggunakan await
//   async function messages() {
//     const msg = await helloWorld();
//     console.log(msg);
//   }
  
//   // c. Memanggil function messages
//   messages();


// //2.  
// function ambilDataUser() {
//     fetch('https://reqres.in/api/users')
//       .then(response => response.json())
//       .then(users => {
//         users.data.forEach(user => {
//           console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
//         });
//       });
//   }
  
//   ambilDataUser();

// //3.
// async function ambilDataUser() {
//     try {
//         const response = await fetch("https://reqres.in/api/users");
//         const users = await response.json();
//         users.data.forEach(user => {
//             console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
//         });
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // Memanggil fungsi ambilDataUser
// ambilDataUser();

import axios from 'axios';

async function ambilDataUser() {
  try {
    const response = await axios.get('https://reqres.in/api/users');
    const users = response.data;
    users.forEach(user => {
      console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
    });
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}

ambilDataUser();