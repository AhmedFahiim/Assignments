function sayHello(userName, Gender) {
  if (Gender === "Male") {
    console.log(`Hello Mr ${userName}`);
  } else if (Gender === "Female") {
    console.log(`Hello Mrs ${userName}`);
  } else {
    console.log(`Hello ${userName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
