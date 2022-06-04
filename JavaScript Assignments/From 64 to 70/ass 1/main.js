function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    return `Hello ${zName.slice(0, zName.indexOf(" ") + 2)}.`;
  }
  namePattern();
  function ageWithMessage() {
    return `Your Age is ${parseInt(zAge)}`;
  }
  ageWithMessage();
  function countryTwoLetters() {
    return `and You are living in ${zCountry.slice(0, 2).toUpperCase()}`;
  }
  countryTwoLetters();
  function fullDetails() {
    return `${namePattern()} ${ageWithMessage()} ${countryTwoLetters()} `;
  }
  return fullDetails();
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
