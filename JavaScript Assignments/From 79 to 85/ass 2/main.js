let objMethodOne = {
  name: "Ahmed",
  age: 26,
};

console.log(objMethodOne.name); // "Method One"

let objMethodTwo = new Object({
  name: "Khaled",
  age: 20,
});
console.log(objMethodTwo.name); // "Method Two"

let objMethodThree = Object.create(objMethodOne);

objMethodThree.name = "Belal";
console.log(objMethodThree.name); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({}, { name: "Mohamed" });
console.log(objMethodFour.name); // "Method Four"
