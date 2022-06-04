// Test Case 1
var num = 9; // "009"

if (num < 10) {
  console.log("00" + num);
}

num < 10 ? console.log("00" + num) : console.log(num);

// Test Case 2
var num = 20; // "020"

if (num > 10 && num < 100) {
  console.log("0" + num);
}

num > 10 && num < 100 ? console.log("0" + num) : console.log(num);

// // Test Case 3
var num = 110; // "110"

if (num >= 100) {
  console.log(num);
}

num >= 100 ? console.log(num) : console.log();
