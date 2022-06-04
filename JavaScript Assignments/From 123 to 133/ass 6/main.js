// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// let numbersCounter = 0;
// chars.forEach((e) => {
//   typeof e === "number" ? numbersCounter++ : "";
// });
// let sortedArr = chars
//   .sort()
//   .copyWithin(0, numbersCounter, numbersCounter + numbersCounter);
// console.log(sortedArr);

// // Needed Output
// // ["A", "B", "C", "A", "B", "C", "D", "E"];

// ---------------------------------------------------------------------------------------------=>

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// let numbersCounter = 0;
// chars.forEach((e) => {
//   typeof e === "number" ? numbersCounter++ : "";
// });
// let sortedArr = chars
//   .sort()
//   .copyWithin(0, numbersCounter, numbersCounter + numbersCounter);
// console.log(sortedArr);

// Needed Output
// ["A", "B", "C", "D", "A", "B", "C", "D", "E"];

// ---------------------------------------------------------------------------------------------=>

let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let splicedArr = chars.splice(0, 5);
let finalArr = [...chars, ...splicedArr];

let numbersCounter = 0;
finalArr.forEach((e) => {
  typeof e === "number" ? numbersCounter++ : "";
});
let sortedArr = finalArr.copyWithin(
  0,
  numbersCounter,
  numbersCounter + numbersCounter
);
console.log(sortedArr);

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"];

// ---------------------------------------------------------------------------------------------=>
