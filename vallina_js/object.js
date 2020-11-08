let log = console.log;
var guy = {
  fName: 'tom',
  lName: 'cruz',
  getName: function (title) {
    return (title || '') + this.fName + ' ' + this.lName;
  },
}

// var getNameNotWorking = (() => {
//   return this.fName + ' ' + this.lName;
// }).bind(guy);

const printName = function (title) {

  if (this.getName)
    log(this.getName(title));
};
printName();
const printNameBind = printName.bind(guy);
printNameBind();

printName.apply(guy, ['Mr.']);
printName.call(guy, 'Mrs.');

// freeze
const freezed = Object.freeze({ a: 1, b: 2, c: [], d: { e: 1 } });
freezed.a = 3;
freezed.c.push(1);
freezed.d.e = 99;
log(freezed);

// promise
// const response = (new Promise());

class Car {

  constructor(make, year) {
    this.make = make;
    this.year = year;
  }

  getMake() {
    return this.make;
  }

  // set make(make) {
  //   this.make = make;
  // }

}

const getYear = function () {
  return this.year;
}

let car1 = new Car('honda', 2018);
log(car1.getMake());
log(getYear.bind(car1)());