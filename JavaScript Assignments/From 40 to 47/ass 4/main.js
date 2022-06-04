let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words[words.length - website.indexOf("o")][0]
    .slice(words.length - website.indexOf("o"))
    .toUpperCase()
); // ZERO
