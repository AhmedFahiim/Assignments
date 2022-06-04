let myImgs = document.querySelectorAll("img");

for (let i = 0; i < myImgs.length; i++) {
  if (myImgs[i].getAttribute("src") === "#") {
    myImgs[i].setAttribute(
      "src",
      "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
    );
  }
  myImgs[i].setAttribute("alt", "Elzero Logo");
}
