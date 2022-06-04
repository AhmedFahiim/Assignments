let a = "Elzero web School";

// use [slice + charAt] to get the result
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// print H alphabet 8 times
console.log(a.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH

// Return array
console.log(a.split(" ", 1)); // [Elzero]

// use [substr + template letarals] to get the result
console.log(`${a.substr(0, 6)}` + ` ${a.substr(11, a.length)}`);

// solution must be dynamic cuz the string might change

console.log(
  a.charAt(0).toLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a.charAt(a.length - 1).toLowerCase()
); //eLZERO WEB SCHOOl
