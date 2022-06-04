// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }
class Car {
  static counter = 0;
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
    Car.counter++;
  }
  carDetails() {
    return `${this.n} And Model Is ${this.m} And Price Is ${this.p}`;
  }
  run() {
    return `Car is Running Now`;
  }
  stop() {
    return `Car is Stopped`;
  }
}

let firstCar = new Car("Car One name Is MG", 2022, 420000);

console.log(firstCar.carDetails());
console.log(firstCar.run());

// Needed Output

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");
