// Create the content
let myTitle = "Elzero",
  myDescription = "Elzero web school",
  myDate = "25/10";
// Create the parent div
let card = `
<div>
<h3>Hello ${myTitle}</h3>
<p>${myDescription}</p>
<span>${myDate}</span>
</div>`;
// print the card 4 times in html sheet
/*we can put the repeat function inside below function
 or after variable value.*/
document.write(card.repeat(4));
