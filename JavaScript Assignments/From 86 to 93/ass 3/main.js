let result = document.querySelector(".result");
result.innerHTML =
  "{<span></span>} USD Dollar = {<span></span>} Egyptian Pound";
let usd = result.firstElementChild;
let pound = result.lastElementChild;

let input = document.forms[0][0];

input.oninput = function (e) {
  let inputValid = false;

  if (inputValid == false) {
    e.preventDefault();
  }
  if (input.value > 0) {
    inputValid = true;
    usd.textContent = input.value;
    pound.textContent = (input.value * 15.8).toFixed(2);
  }
};
