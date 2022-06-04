let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

function check() {
  if (myFriends[chosen - 1].available === true) {
    myFriends[chosen - 1].available = "Available";
  } else myFriends[chosen - 1].available = "Not Available";
}

check();
let {
  title,
  age,
  available,
  skills: [, css],
} = myFriends[chosen - 1];

console.log(title);
console.log(age);
console.log(available);
console.log(css);
