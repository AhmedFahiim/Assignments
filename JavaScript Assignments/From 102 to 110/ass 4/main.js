let myDiv = document.querySelector("div");

function countDown() {
  myDiv.textContent -= 1;
  if (myDiv.textContent === "5") {
    location.href = "http://Elzero.org";
  }
}
let counter = setInterval(countDown, 1000);
