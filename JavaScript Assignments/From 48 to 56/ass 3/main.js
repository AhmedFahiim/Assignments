let start = 1;
let end = 6;

for (; start <= end; start++) {
  console.log(start);
  for (let breaker = 2; breaker < end; breaker += breaker) {
    console.log(`-- ${breaker}`);
  }
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
