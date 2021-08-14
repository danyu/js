/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
  let called = false;
  let result = null;
  return function wrapper(...args) {
    if (!called) {
      result = func.apply(this, args);
      called = true;
    }
    return result;
  };
}

function func(num) {
  return num;
}

const onced = once(func);

onced(1);
// 1, func called with 1

onced(2);
// 1, even 2 is passed, previous result is returned

function func(b, c) {
  return this.a + b + c;
}

const onced1 = once(func);
const obj = {
  a: 1,
  onced1,
};

console.log(obj.onced1(2, 3), "should be 6");
