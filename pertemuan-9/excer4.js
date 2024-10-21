// Original array
let people = ["Greg", "Mary", "Devon", "James"];

// 2. for-loop
console.log("Using for-loop:");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 3. forEach
console.log("Using forEach:");
people.forEach(person => {
    console.log(person);
});

// 4. Removing "Greg"
console.log("Removing Greg:");
people.splice(people.indexOf("Greg"), 1);
console.log(people); // ["Mary", "Devon", "James"]

// 5. Removing "James"
console.log("Removing James:");
people.splice(people.indexOf("James"), 1);
console.log(people); // ["Mary", "Devon"]

// 6. Adding "Matt" to the front
console.log("Adding Matt to the front:");
people.unshift("Matt");
console.log(people); // ["Matt", "Mary", "Devon"]

// 7. Adding your name "Franklyn" to the end
console.log("Adding Franklyn to the end:");
people.push("Franklyn");
console.log(people);

// 8. Iterating and exiting after "Mary"
console.log("Iterating and exiting after Mary:");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

// 9. Making a copy without "Mary" or "Matt"
console.log("Making a copy without Mary or Matt:");
let copy = people.slice().filter(person => person !== "Mary" && person !== "Matt");
console.log(copy); // ["Devon", "Franklyn"]

// 10. Redefining people and using splice
console.log("Redefining people and using splice:");
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people); // ["Greg", "Mary", "Elizabeth", "Artie", "James"]

// 11. Concatenating with "Bob"
console.log("Concatenating with Bob:");
let withBob = people.concat("Bob");
console.log(withBob); // ["Greg", "Mary", "Elizabeth", "Artie", "James", "Bob"]

// 12. Final result setup
console.log("Final result setup:");
people = ["Matt", "Mary", "Devon", "Franklyn"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people); // ["Matt", "Mary", "Elizabeth", "Artie", "Franklyn"]

// 13. Concatenating with "Bob"
let finalResult = people.concat("Bob");
console.log("Final result:", finalResult); // ["Matt", "Mary", "Elizabeth", "Artie", "Franklyn", "Bob"]


//No 2.

// Initial object
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// Add "Go" to the end of the languages array
programming.languages.push("Go");
console.log("After adding 'Go':", programming.languages); // ["JavaScript", "Python", "Ruby", "Go"]

// Change the difficulty to 7
programming["difficulty"] = 7;
console.log("Difficulty after change:", programming.difficulty); // 7

// Remove the jokes key
delete programming.jokes;
console.log("Jokes after deletion:", programming.jokes); // undefined

// Add isFun with a value of true
programming.isFun = true;
console.log("isFun after addition:", programming.isFun); // true

// Map through languages and update each element
const updatedLanguages = programming.languages.map((language, index) => `${index} - ${language}`);
console.log("Updated languages array:", updatedLanguages); // ["0 - JavaScript", "1 - Python", "2 - Ruby", "3 - Go"]

