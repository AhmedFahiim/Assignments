// remove paragraph element
let myP = document.querySelector("p");
myP.remove();

// add elemnt before div and after div
let myDiv = document.querySelector("div");
let newDiv = document.createElement("div");
newDiv.className = "start";
newDiv.title = "Start Element";
newDiv.setAttribute("data-value", "Start");
newDiv.textContent = "Start";
myDiv.before(newDiv);
newDivClone = newDiv.cloneNode(false);
newDivClone.textContent = "End";
myDiv.after(newDivClone);
