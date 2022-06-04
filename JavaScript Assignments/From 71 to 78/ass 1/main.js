let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newArray = mix
  .map(function (x) {
    return typeof x !== "number" ? x : "";
  })
  .reduce(function (a, b) {
    return `${a}${b}`;
  });
console.log(newArray);
