let start = 0;
let swappedName = "elZerO";
let New = "";
for (; start < swappedName.length; start++) {
  if (swappedName[start] == swappedName[start].toUpperCase()) {
    New += swappedName[start].toLowerCase();
  } else {
    New += swappedName[start].toUpperCase();
  }
}
console.log(New);
// Output
("ELzERo");
