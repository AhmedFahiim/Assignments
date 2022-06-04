let fontStylebox = document.querySelectorAll("[name='fonts']");
let fontStyleOptions = document.querySelectorAll("[name='fonts'] option");
let fontColorbox = document.querySelectorAll("[name='colors']");
let fontColorOptions = document.querySelectorAll("[name='colors'] option");
let fontSizesbox = document.querySelectorAll("[name='font-sizes']");
let fontSizeOptions = document.querySelectorAll("[name='font-sizes'] option");
let myParagraph = document.querySelector("p");

if (window.localStorage.getItem("font-family")) {
  myParagraph.style.fontFamily = window.localStorage.getItem("font-family");
  fontStyleOptions.forEach((ele) => {
    ele.removeAttribute("selected");
  });
  document
    .querySelector(`[value='${window.localStorage.getItem("font-family")}']`)
    .setAttribute("selected", "");
}

fontStylebox.forEach((ele) => {
  ele.addEventListener("change", function (e) {
    window.localStorage.setItem("font-family", e.currentTarget.value);
    myParagraph.style.fontFamily = e.currentTarget.value;
  });
});

// text color

if (window.localStorage.getItem("font-color")) {
  myParagraph.style.color = window.localStorage.getItem("font-color");
  fontColorOptions.forEach((ele) => {
    ele.removeAttribute("selected");
  });
  document
    .querySelector(`[value='${window.localStorage.getItem("font-color")}']`)
    .setAttribute("selected", "");
}
fontColorbox.forEach((ele) => {
  ele.addEventListener("change", function (e) {
    window.localStorage.setItem("font-color", e.currentTarget.value);
    myParagraph.style.color = e.currentTarget.value;
  });
});

// text font size

if (window.localStorage.getItem("font-size")) {
  myParagraph.style.fontSize = window.localStorage.getItem("font-size");
  fontSizeOptions.forEach((ele) => {
    ele.removeAttribute("selected");
  });
  document
    .querySelector(`[value='${window.localStorage.getItem("font-size")}']`)
    .setAttribute("selected", "");
}
fontSizesbox.forEach((ele) => {
  ele.addEventListener("change", function (e) {
    window.localStorage.setItem("font-size", e.currentTarget.value);
    myParagraph.style.fontSize = e.currentTarget.value;
  });
});
