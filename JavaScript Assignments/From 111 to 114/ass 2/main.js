let myInputs = document.querySelectorAll("input");
let country = document.querySelector("[name='country']");

myInputs.forEach((input) => {
  if (window.sessionStorage.getItem(input.getAttribute("type"))) {
    input.value = window.sessionStorage.getItem(input.getAttribute("type"));
  }
});
myInputs.forEach((input) => {
  input.onblur = () => {
    window.sessionStorage.setItem(input.getAttribute("type"), input.value);
  };
});
if (window.sessionStorage.getItem(country.getAttribute("name"))) {
  country.value = window.sessionStorage.getItem(country.getAttribute("name"));
}

country.onchange = function () {
  window.sessionStorage.setItem(country.getAttribute("name"), country.value);
};
