export function yearUntilRetirement(person) {
    const currentYear = new Date().getFullYear(); // Get current year dynamically
    const age = currentYear - person.year;
    const retirementAge = 60;
  
    if (retirementAge > age) {
      console.log(`${person.firstName} retires in ${retirementAge - age} years.`);
    } else {
      console.log(`${person.firstName} is already retired.`);
    }
  }