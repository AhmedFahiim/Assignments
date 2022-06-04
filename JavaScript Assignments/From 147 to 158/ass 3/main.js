// Edit The Class
class User {
  #c;
  constructor(username, card) {
    let regX = /\d{4}-\d{4}-\d{4}-\d{4}/;
    this.u = username;
    this.#c = regX.test(card)
      ? card
      : card.toString().replace(/(\B(?=(?:\d{4})+(?!\d)))/g, "-");
  }
  get showData() {
    return `Hello ${this.u} Your Credit Card Number is ${this.#c}`;
  }
}
// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined
