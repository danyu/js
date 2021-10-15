// in object, this -> object
// in function, this -> window
// when new function(), this -> object created by new

const log = console.log;
function Car(make) {
  // stay in scope
  this.make = make;

  // stay in closure
  let autoId = 44;
  this.printInfo = () => console.log(this.make + "," + autoId);

  this.printInfo1 = function () {
    console.log(this.make + ", " + autoId);
  };
  log("In function, this =", this);
}

Car("unknown");
log("Car.prototype = ", Car.prototype);

const car1 = new Car("Toyota");
const { printInfo, printInfo1 } = car1;

printInfo(); // already bind to car1
printInfo1(); // not bind to car1
printInfo1.apply(car1);

const car2 = new Car("Honda");
printInfo.apply(car2); // can not change bind
printInfo1.apply(car2); // can change bind to car2

/**
 * Be careful when it is in object,
 * => can bind to global / window
 **/

const obj = {
  name: "obj",
  printThis: function () {
    console.log(this.__proto__, this.name);
  },
  // unexpected binding to outer scope = window
  printThis_bindWindow: () => {
    console.log(this.__proto__, this.name);
  },
};
obj.printThis();
obj.printThis_bindWindow();

let user = {
  name: "John",
  age: 30,

  sayHi() {
    log("user.name", this.name); // leads to an error
  },
};
log(user);
user.sayHi();
