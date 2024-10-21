// IIFE
const bmi = (function (berat, tinggi) {
    let BMI = berat / (tinggi * tinggi);
    return BMI;
})(63, 1.6);

console.log(bmi);

//callback
function hitungBMI(berat, tinggi, callback) {
    let BMI = berat / (tinggi * tinggi);
    callback(BMI);
  }
  
  function tampilkanBMI(bmi) {
    console.log(bmi);
  }
  
  hitungBMI(63, 1.6, tampilkanBMI);