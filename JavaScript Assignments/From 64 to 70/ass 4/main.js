function specialMix(...data) {
  let counter = 0;
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (parseInt(data[i])) {
      result += parseInt(data[i]);
    } else {
      counter++;
    }
  }
  if (result === 0 && counter === data.length) {
    result = `All arguments is strings`;
  }
  return result;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
