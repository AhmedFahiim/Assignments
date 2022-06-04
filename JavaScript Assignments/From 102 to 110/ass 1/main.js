let myPrompt = prompt("Print Number From – To", "Example: 5-20").split("-");

if (+myPrompt[0] < +myPrompt[1]) {
  for (let i = +myPrompt[0]; i <= +myPrompt[1]; i++) {
    console.log(i);
  }
} else {
  for (let i = +myPrompt[1]; i <= +myPrompt[0]; i++) {
    console.log(i);
  }
}
