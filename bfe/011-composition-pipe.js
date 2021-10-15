/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  // your code here
  return function (v) {
    if (!funcs.length) return v;
    return funcs.reduce((acc, func) => {
      if (acc == null) {
        acc = func(v);
      } else {
        acc = func(acc);
      }
      return acc;
    }, null);
  };
}

const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

console.log(pipe([times(2), plus(3), times(4)])(2));
