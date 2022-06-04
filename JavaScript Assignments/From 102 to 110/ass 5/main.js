let myDiv = document.querySelector("div");

function countDown() {
  myDiv.textContent -= 1;
  if (myDiv.textContent === "5") {
    window.open("http://elzero.org", "_blank", "width=500,height=400,top=500");
  } else if (myDiv.textContent === "0") {
    clearInterval(counter);
  }
}
let counter = setInterval(countDown, 1000);
