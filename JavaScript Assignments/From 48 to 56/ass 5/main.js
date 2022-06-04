let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let number = friends.indexOf("Sayed");

for (let i = friends.indexOf("Ahmed"); i < friends.length; i++) {
  if (friends[i][friends.indexOf("Ahmed")] == letter.toUpperCase()) {
    continue;
  }
  console.log(`("${number++} => ${friends[i]})`);
}

// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");
