let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find the smallest value of the variables
console.log(parseInt(Math.min(a, b, d, c)));

// Use Variable a and d just one time to get the needed output
console.log(a * c + (b - b) * d); //10000

// Return integer value from variable d with a different 4 ways
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log(Number(d.toFixed(0)));

// Use Variabel b and d just one time to get the results
console.log(Number((Math.trunc(b) / Math.ceil(d)).toFixed(2))); //66.67
console.log(Math.round((Math.trunc(b) / Math.ceil(d)).toFixed(2))); //66.67
