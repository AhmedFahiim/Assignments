let theName = "Elzero";

// ----------------------------------[1]
console.log(Array.from(theName));
// ----------------------------------[2]
console.log(theName.split(""));
// ----------------------------------[3]
console.log([...theName]);
// ----------------------------------[4]
let newObj = Object.values({ ...theName });
console.log(newObj);
// ----------------------------------[5]
console.log(Array.from(new Set([...theName])));
// ----------------------------------[6]

// Needed Output
// ["E", "l", "z", "e", "r", "o"];
