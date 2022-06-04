let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}

if (haystack.indexOf(needle)) {
  console.log("Found");
}

if (haystack.slice(1, 2) == needle) {
  console.log("Found");
}
