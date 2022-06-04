// create Header element

let myHeader = document.createElement("header");
myHeader.className = "header";
document.body.prepend(myHeader);
let logo = document.createElement("h2");
logo.textContent = "UNYK!";
logo.className = "logo";
myHeader.prepend(logo);
let myList = document.createElement("ul");
myList.className = "menu";
myHeader.append(myList);

// create li of my list
for (let i = 0; i < 4; i++) {
  let myli = document.createElement("li");
  myList.append(myli);
  myli.style.padding = "8px 20px";
}
myList.children[0].textContent = "Home";
myList.children[1].textContent = "About";
myList.children[2].textContent = "Service";
myList.children[3].textContent = "Content";

// myHeader styling
myHeader.style.cssText =
  "width:1200px; background-color: white; display: flex; justify-content: space-between; align-items: center; padding: 0 15px; margin: 0 auto ;";
// logo styling
logo.style.color = "#4e9c88";
// myList styling
myList.style.cssText = "display: flex; align-items: center; list-style: none;";

// start products section
let mainSec = document.createElement("section");
myHeader.after(mainSec);
// create products div

for (let i = 0; i < 15; i++) {
  let mydiv = document.createElement("div");
  mydiv.className = "product";
  mainSec.append(mydiv);
  let spanNumber = document.createElement("span");
  mydiv.prepend(spanNumber);
  spanNumber.textContent = i + 1;
  spanNumber.style.cssText = "font-Weight: bold; font-size: 25px";
  let myText = document.createElement("p");
  mydiv.append(myText);
  myText.textContent = "Product";
  mydiv.style.cssText =
    "text-align: center; background-color: white; padding: 10px";
}

mainSec.style.cssText =
  "width: 1450px; background-color: #ececec; display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 20px; padding: 15px; margin:0 auto;";

// create footer
let myFooter = document.createElement("footer");
mainSec.after(myFooter);

myFooter.textContent = "Copyright 2022";
myFooter.className = "footer";
myFooter.style.cssText =
  "background-color: #4e9c88; text-align: center; color: white; font-size: 20px; margin-top: 10px; padding: 15px";
