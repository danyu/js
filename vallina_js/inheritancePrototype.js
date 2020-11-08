

let log = console.log;
let dir = console.dir;
log('-----prototype');

log(Array.prototype, Array.__proto__);

function Shape(name) {
  this.name = name;
  this.alias = 'alias';
  this.sides = -1;
  this.printName = function () {
    log(this.name);
  }

  function hiddenFunc() {
    log('Scret');
  }
};

Shape.prototype.scretName = 'abc';
Shape.prototype.print = function () {
  console.log(this.alias);
};

let triangle = new Shape('triangle');
console.log('!!! Object.getPrototypeOf(Shape)', Object.getPrototypeOf(Shape));
console.log('!!! Shape.__proto__ =', Shape.__proto__);
console.log('!!! Shape.prototype =', Shape.prototype);
console.log('!!! triangle.__proto__ =', triangle.__proto__);
console.log('!!! triangle.prototype =', triangle.prototype);
triangle.printName();

log('-----inheritance')
let Shape1 = {
  name: 'default',
  sides: -1,
  hasLines: true,
  printName: function () {
    log('name=', this.name, ', sides=', this.sides);
  }
}

let rect = Object.create(Shape1);
rect.sides = 4
rect.name = 'rectangle'
rect.corner = '90 degree'
for (let key in rect) {
  log('key = ', key, rect.hasOwnProperty(key));
}
log(rect.printName());
