// catch addition input
let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let myCurrentDiv = document.querySelector("[title='Current']");
let myClassesprint = document.querySelector(".classes-list").lastElementChild;
let myspans = document.querySelectorAll("span");

// add classes
function welcome() {
  document.querySelectorAll("span").forEach((ele) => ele.remove());
  for (let i = 0; i < this.value.split(" ").length; i++) {
    if (addInput.value.length > 0) {
      myCurrentDiv.classList.add(addInput.value.split(" ")[i].toLowerCase());
    }
    if (removeInput.value.length > 0) {
      myCurrentDiv.classList.remove(
        removeInput.value.split(" ")[i].toLowerCase()
      );
    }
  }
  addClassesToSpan();
  this.value = "";
}

function addClassesToSpan() {
  if (myCurrentDiv.classList.length === 0) {
    myClassesprint.textContent = "No Classes To Show";
  } else {
    myClassesprint.textContent = "";
    myCurrentDiv.classList.value
      .split(" ")
      .sort()
      .forEach((element) => {
        let myspan = document.createElement("span");
        myspan.append(element);
        myClassesprint.append(myspan);
      });
  }
}
addClassesToSpan();
addInput.onblur = welcome;
removeInput.onblur = welcome;
