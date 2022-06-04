function ageInTime(theAge) {
  if (theAge > 10 && theAge <= 100) {
    console.log(`Your Age by Months Is ${theAge * 12}`);
    let Weeks = theAge * 52;
    console.log(`Your Age by Weeks is ${Weeks}`);
    let days = Weeks * 7;
    console.log(`Your Age by Days is ${days}`);
    let hours = days * 24;
    console.log(`Your Age by Hours is ${hours}`);
    let Minutes = hours * 60;
    console.log(`Your Age by Minutes is ${Minutes}`);
    let Seconds = Minutes * 60;
    console.log(`Your Age by Seconds is ${Seconds}`);
  } else {
    console.log(`Sorry Your Age is out of Range`);
  }
}

ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
