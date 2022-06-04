// function checkStatus(a, b, c) {
//   // first condetion
//   if (
//     typeof a === "string" &&
//     typeof b === "number" &&
//     typeof c === "boolean"
//   ) {
//     if (c === true) {
//       console.log(`Hello ${a} Your Age is ${b} And You are available for hire`);
//     } else {
//       console.log(
//         `Hello ${a} Your Age is ${b} And You are not available for hire`
//       );
//     }
//   }
//   // second condetion
//   if (
//     typeof a === "number" &&
//     typeof b === "string" &&
//     typeof c === "boolean"
//   ) {
//     if (c === true) {
//       console.log(`Hello ${b} Your Age is ${a} And You are available for hire`);
//     } else {
//       console.log(
//         `Hello ${b} Your Age is ${a} And You are not available for hire`
//       );
//     }
//   }
//   // Third condetion
//   if (
//     typeof a === "number" &&
//     typeof b === "boolean" &&
//     typeof c === "string"
//   ) {
//     if (b === true) {
//       console.log(`Hello ${c} Your Age is ${a} And You are available for hire`);
//     } else {
//       console.log(
//         `Hello ${c} Your Age is ${a} And You are not available for hire`
//       );
//     }
//   }
//   // Fourth condetion
//   if (
//     typeof a === "boolean" &&
//     typeof b === "string" &&
//     typeof c === "number"
//   ) {
//     if (a === true) {
//       console.log(`Hello ${b} Your Age is ${c} And You are available for hire`);
//     } else {
//       console.log(
//         `Hello ${b} Your Age is ${c} And You are not available for hire`
//       );
//     }
//   }
//   // fifth condetion
//   if (
//     typeof a === "string" &&
//     typeof b === "boolean" &&
//     typeof c === "number"
//   ) {
//     if (b === true) {
//       console.log(`Hello ${a} Your Age is ${c} And You are available for hire`);
//     } else {
//       console.log(
//         `Hello ${a} Your Age is ${c} And You are not available for hire`
//       );
//     }
//   }
//   // six condetion
//   if (
//     typeof a === "boolean" &&
//     typeof b === "number" &&
//     typeof c === "string"
//   ) {
//     if (a === true) {
//       console.log(`Hello ${c} Your Age is ${b} And You are available for hire`);
//     } else {
//       console.log(
//         `Hello ${c} Your Age is ${b} And You are not available for hire`
//       );
//     }
//   }
// }

// // Needed Output
// checkStatus("Osama", 15, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(18, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 10, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

function checkStatus(a, b, c) {
  let details = [a, b, c];
  let name, age, status;
  for (let i = 0; i < details.length; i++) {
    typeof details[i] === "string"
      ? (name = details[i])
      : typeof details[i] === "number"
      ? (age = details[i])
      : typeof details[i] === "boolean"
      ? (status = details[i])
      : console.log(`statu not available`);
  }
  status === true
    ? console.log(
        `Hello ${name} Your Age is ${age} And You are available for hire`
      )
    : console.log(
        `Hello ${name} Your Age is ${age} And You are not available for hire`
      );
}
checkStatus("Osama", 15, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(18, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 10, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
