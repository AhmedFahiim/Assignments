// let names = function (...names) {
//   return `[${names.join("],[").concat("]=> Done!")}`;
// };
// console.log(names("Osama", "Ahmed", "Mohamed"));

// let names = (...names) => `[${names.join("],[").concat("]=> Done!")}`;
// console.log(names("Osama", "Ahmed", "Mohamed"));

// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two - nums;

// console.log(calc(60, 50, 20 + 10)); //80

let myNumbers = [20, 50, 10, 60];
function calc(one, two, ...nums) {
 return one + two - nums;
}

console.log(calc(60, 50, 20 + 10)); //80
