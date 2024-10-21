let person = {
    firstName: "John",
    weight: 50, // dalam kilogram
    height: 1.75, // dalam meter

    calculateBMI: function() {
        let bmi = this.weight / (this.height * this.height);
        let roundedBMI = bmi.toFixed(1); // Membulatkan BMI ke satu desimal

        // Menentukan kategori BMI berdasarkan rentang
        if (roundedBMI < 16.0) {
            return "Severely Underweight";
        } else if (roundedBMI >= 16.0 && roundedBMI <= 18.4) {
            return "Underweight";
        } else if (roundedBMI >= 18.5 && roundedBMI <= 24.9) {
            return "Normal";
        } else if (roundedBMI >= 25.0 && roundedBMI <= 29.9) {
            return "Overweight";
        } else if (roundedBMI >= 30.0 && roundedBMI <= 34.9) {
            return "Moderately Obese";
        } else if (roundedBMI >= 35.0 && roundedBMI <= 39.9) {
            return "Severely Obese";
        } else {
            return "Morbidly Obese";
        }
    }
};

// Contoh penggunaan
console.log(`Name: ${person.firstName}`);
console.log(`Weight: ${person.weight} kg`);
console.log(`Height: ${person.height} m`);
console.log(`BMI Category: ${person.calculateBMI()}`);
