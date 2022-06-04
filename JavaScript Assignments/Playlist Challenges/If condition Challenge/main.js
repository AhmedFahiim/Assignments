// let a = 10;

// a > 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 To 40")
//   : a > 40
//   ? console.log("> 40 ")
//   : console.log("Unknown");

let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

// position may change
if (st.substr(st.indexOf("W"), 1).toLowerCase() === "w") {
  console.log("Good");
}

if (st.charAt(3) !== "string") {
  console.log("Good");
}

if (st.replace("Elzero", "number").substring(0, 6) === "number") {
  console.log("Good");
}

if (st.substring(0, 6) + st.substring(0, 6) === "ElzeroElzero") {
  console.log("Good");
}
