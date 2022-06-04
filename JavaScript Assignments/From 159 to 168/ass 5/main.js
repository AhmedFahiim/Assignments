let start =  performance.now();

for(let i =0; i<=100; i++) {
  document.write(`<p>${i}</p>`)
}

let end =  performance.now();

console.log(`Loop Took ${Math.trunc(end - start)} Milliseconds.`)