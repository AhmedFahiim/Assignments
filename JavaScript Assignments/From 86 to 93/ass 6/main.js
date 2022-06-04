let elemntNumber = document.forms[0][0];
let elemntText = document.forms[0][1];
let elemntType = document.getElementsByTagName("select");
let submitButton = document.querySelector("[value='Create']");
let resultsDiv = document.getElementsByTagName("div")[0];

document.forms[0].onsubmit = function (event) {
  event.preventDefault();
};
submitButton.onclick = function (e) {
  document.querySelectorAll(".Box").forEach((el) => el.remove());
  let numberValid = false;
  let textValid = false;

  if (elemntText.value !== "") {
    textValid = true;
  }
  if (elemntNumber.value > 0) {
    numberValid = true;
  }
  if (numberValid === false || textValid === false) {
    e.preventDefault();
    return;
  }
  for (let i = 1; i <= elemntNumber.value; i++) {
    let newElement = document.createElement(elemntType.value);
    newElement.textContent = elemntText.value;
    newElement.className = "Box";
    newElement.title = "Element";
    newElement.id = `id-${i}`;
    resultsDiv.appendChild(newElement);
  }
};
