let theNumber = 100020003000;

let uniqe = Number(
  Array.from(new Set([...theNumber.toString()]))
    .sort()
    .join("")
);

console.log(uniqe);
// Needed Output
