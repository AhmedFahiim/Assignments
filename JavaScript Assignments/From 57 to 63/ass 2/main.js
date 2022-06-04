function calculate(firstNum, secNum, operation) {
  if (operation === "add" || operation === undefined) {
    console.log(firstNum + secNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secNum);
  } else if (secNum === undefined) {
    console.log("The second Opperand is not available");
  }
}

calculate(20);
calculate(20, 30);
calculate(20, 30, "add");
calculate(20, 30, "subtract");
calculate(20, 30, "multiply");
