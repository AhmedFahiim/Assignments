let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
// [2]

console.log(my.slice(++zero, --counter).reverse()); // ["Elham", "Mazero"]
// [3]

my[0] = "Elzero";
console.log(my.slice(--zero, counter)[zero]); // "Elzero"
// [4]

console.log(
  my[++zero].slice(++counter, ++counter) + my[zero][counter].toUpperCase()
); // "rO"
