let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let filter = numsAndStrings
  .filter(function (x) {
    return !isNaN(x);
  })
  .map(function (a) {
    return -a;
  });
console.log(filter);
// [-1, -10, 10, 20, -5, -3]
