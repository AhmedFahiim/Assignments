let div = document.querySelectorAll("div");

for (let i = 0; i < div.length; i++) {
  if (div[i].hasAttribute("title")) {
    if (div[i].getAttribute("title") === "two") {
      div[i].setAttribute("title", "One");
      div[i].textContent = "One";
    } else {
      div[i].setAttribute("title", "two");
      div[i].textContent = "Two 2";
    }
  }
}
