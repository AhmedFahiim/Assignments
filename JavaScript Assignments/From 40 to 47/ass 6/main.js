let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr1.splice(0, 2);
arr2.splice(0, 2);
allArrs = arr1.concat( arr2).sort().join("").toString().toLowerCase();
console.log(allArrs); // fxy
