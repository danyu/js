console.log("-----currying-----");
/***
 * Currying refers to the process of transforming a
 * function with multiple arguements into the same function with less arguements
 */
function makeCoffee(coffee, cream) {
  return coffee + ", " + cream;
}

console.log(makeCoffee("coffe", "2% fat milk"));
var makeDecaf = makeCoffee.bind(null, null, "decaf");
console.log(makeDecaf("skim milk"));

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

console.log("===");

function curry(func) {
  console.log("curry");
  return function curried(...args) {
    console.log(func, func.length, args);
    // console.log(this);
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        console.log(args);
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const curriedJoin = curry(join);

// console.log(curriedJoin(1, 2, 3)); // '1_2_3'

// console.log(curriedJoin(1)(2, 3)); // '1_2_3'

console.log(curriedJoin(1, 2)(3)); // '1_2_3'
