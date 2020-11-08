
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

console.log(add(1));
console.log(add(4));

const callCount = (function () {
  let cnt = 0;
  function increase() {
    cnt++;
    return cnt;
  }

  increase.reset = () => cnt = 0;
  return increase;
})();

console.log(callCount());
console.log(callCount());
callCount.reset();
console.log(callCount());

const SS = (function () {
  const calculation = function (initVal = 0) {
    this.val = initVal;
    this.add = function (num = 0) {
      this.val += num
      return this;
    }
    this.print = () => {
      console.log(this.val);
      return this;
    }
    return this;
  };

  const init = function (initVal = 0) {
    return calculation(initVal);
  }
  return init;
})();

SS(9).add(1).add(1).print().add(4).print();