const log = console.log;
const add = (function () {
  // live in closure
  let sum = 0;

  function _add(num) {
    return sum + num;
  }

  return (function (num = 0) {
    sum += _add(num);
    return sum;
  });
})();

log(add(1));
log(add(4));
log(add(8));


log('------------');
const callCount = (function () {
  let cnt = 0;
  function increase() {
    cnt++;
    return cnt;
  }

  increase.reset = () => cnt = 0;
  return increase;
})();

log(callCount());
log(callCount());
callCount.reset();
log(callCount());

log('Math');
let curVal = 1000;
const Math = function (initVal = 0) {
  let curVal = initVal;
  this.add = (val) => {
    curVal += val;
    return this;
  }
  this.sub = function (val) {
    curVal -= val;
    log('after sub', curVal);
    return this;
  }
  this.printVal = function () {
    log('curVal', curVal);
  }
}

let task1 = new Math(10);
let task2 = new Math(100);
task1.add(1).add(1).sub(20).printVal();
task1.add.call(task2, 10).printVal();
task2.printVal();
task1.sub.call(task2, 10).printVal();
task1.printVal();
log(curVal);