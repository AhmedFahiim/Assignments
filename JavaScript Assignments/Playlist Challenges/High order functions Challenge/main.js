// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// Zletter = myString[myString.length - true];
// let solution = myString
//   .split("")
//   .filter(function (f) {
//     return isNaN(f);
//   })
//   .map(function (r) {
//     if (r == "," || r == Zletter) {
//       return "";
//     } else return r;
//   })
//   .reduce(function (n, m) {
//     if (n == m) {
//       return n;
//     }
//     return n + m;
//   })
//   .split("_")
//   .join(" ");
// console.log(solution);

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
Zletter = myString[myString.length - true];
let solution = myString
  .split("")
  .filter((f) => isNaN(f))
  .map((r) => {
    if (r == "," || r == Zletter) {
      return "";
    } else return r;
  })
  .reduce((n, m) => {
    if (n == m) {
      return n;
    }
    return n + m;
  })
  .split("_")
  .join(" ");
console.log(solution);
