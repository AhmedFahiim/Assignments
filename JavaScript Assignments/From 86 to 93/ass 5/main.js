let myImgs = document.querySelectorAll("img");

for (let i = 0; i < myImgs.length; i++) {
  if (myImgs[i].hasAttribute("alt")) {
    myImgs[i].setAttribute("alt", "Old");
  } else {
    myImgs[i].setAttribute("alt", "Elzero New");
  }
}
