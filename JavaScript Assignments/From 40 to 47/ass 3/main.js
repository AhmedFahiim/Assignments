let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrTwo).concat(arrOne).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
