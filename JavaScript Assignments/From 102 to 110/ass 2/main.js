let myDiv = document.createElement("div");
myDiv.innerHTML =
  "<span>Welcome</span> <p>Welcome To Elzero Web School</p><button>X</button>";
document.body.append(myDiv);
// elemnts styling
myDiv.style.cssText =
  "background-Color: #ececec; text-align: center; width: fit-content; padding: 18px 100px; margin: 50px auto; position: relative; display: none";
myDiv.firstChild.style.cssText = "font-size: 20px; font-weight: bold;";
myDiv.lastChild.style.cssText =
  "position: absolute; top: -10px; right: -10px; background-color: red; color: white; padding: 7px; border-radius: 50%; border: 2px solid white;";

// Set the function
let mypopup = setTimeout(function () {
  myDiv.style.display = "block";
}, 5000);

myDiv.lastChild.onclick = function () {
  myDiv.remove();
};
