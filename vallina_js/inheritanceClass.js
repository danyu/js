class Animal {
  constructor(name) {
    this.fullname = name;
    this.canFly = null;

  }
  move() {
    console.log('move => Animal moves');
    return this;
  }
  about() {
    // console.log(this.move);
    console.log(this.fullname);
    return this;
  }

  changeColor() {

  }
}


class Cat extends Animal {

  constructor(name) {
    super(name);
    this.canJump = true;
  }
  move() {
    console.log('Cat jumps.')
  }
}

class Tiger extends Cat {
  move() {
    console.log('Tiger charges');
  }
}

let tom = new Animal('Tom');
let tiger = new Tiger('Siberian')
tom.move().about();
tiger.about();
console.log(tom.canJump);