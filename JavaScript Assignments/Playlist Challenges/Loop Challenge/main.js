let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samara"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
let fAdmins = [];
// calculate the number of admins;

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;
  fAdmins.push(myAdmins[i]);
}
document.write(`<div>We have ${fAdmins.length} Admins</div><hr>`);

// loop to filter the names

for (let team_num = 0; team_num < fAdmins.length; team_num++) {
  let staff_count = 1;
  document.write(
    `<div>
    The Admin of team number ${team_num + 1} Is ${fAdmins[team_num]}`
  );
  document.write(`<h2> Team members :</h2>`);
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === fAdmins[team_num][0]) {
      document.write(`<p> - ${staff_count++} ${myEmployees[j]}</p>`);
    } else continue;
  }
  document.write(`</div><hr>`);
}
