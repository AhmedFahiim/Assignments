let myArray = ["E", "l", "z", ["e", "r"], "o"];
let reduce = myArray.reduce(function (a, b) {
  return (a + b).split(",").reduce(function (a, b) {
    return a + b;
  });
});

console.log(reduce);
