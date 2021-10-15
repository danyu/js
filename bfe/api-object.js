let objToString = Object.prototype.toString;
let str = "fds";
let ary = [1, 2, 3];
let sym = Symbol();
let nan = NaN;
let bigInt = 123n;

console.log(str.toString(), objToString.call(str));
console.log(ary.toString(), objToString.call(ary));
console.log(sym.toString(), objToString.call(sym));
console.log(Infinity, objToString.call(Infinity));
console.log(nan, objToString.call(nan));
console.log(bigInt, objToString.call(bigInt));
