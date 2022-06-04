let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let newFriends = new Set(myFriends.sort());

console.log(newFriends);

// Needed Output
// [("Ahmed", "Mahmoud", "Osama", "Sayed")];
