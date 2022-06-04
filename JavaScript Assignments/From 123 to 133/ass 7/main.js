let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// --------------------------------------=>[1]
// numsOne.push(...numsTwo);
// console.log(numsOne);
// --------------------------------------=>[2]
// console.log(numsOne.concat(numsTwo));
// --------------------------------------=>[3]
// console.log([...numsOne, ...numsTwo]);
// --------------------------------------=>[4]
// let finalArr = `${numsOne},${numsTwo}`.split(",").map((e) => +e);
// console.log(finalArr);
// --------------------------------------=>[5]
let finalArr = (numsOne + "," + numsTwo).split(",").map((e) => +e);
console.log(finalArr);
// Needed Output
// [1, 2, 3, 4, 5, 6];
