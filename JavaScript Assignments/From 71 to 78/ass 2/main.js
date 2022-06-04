let myString = "EElllzzzzzzzeroo";

let filter = myString
  .split("")
  .filter(function (x, p) {
    return myString.indexOf(x) == p;
  })
  .reduce(function (a, b) {
    return a + b;
  });
console.log(filter);
