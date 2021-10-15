function fibo(n) {
  if (n < 2) return n;
  return fibo(n - 1) + fibo(n - 2);
}

// customized fibo memo
function memoFibo() {
  let memo = {};
  return function innerFibo(n) {
    if (n < 2) return n;
    if (memo[n]) return memo[n];
    return (memo[n] = innerFibo(n - 1) + innerFibo(n - 2));
  };
}

//
const fastFibo = memoFibo();

let start = performance.now();
console.log(fastFibo(25), performance.now() - start);
start = performance.now();
console.log(fibo(25), performance.now() - start);

function fiboDyn(n) {
  if (n < 2) return n;
  let f = [0, 1];
  for (let i = 2; i <= n; i++) f[i] = f[i - 1] + f[i - 2];
  return f[n];
}

// general fn memo
function memoFn(fn) {
  let memo = {};
  const recur = function (...args) {
    if (memo[args]) return memo[args];
    return (memo[args] = fn.call(null, args));
  };
  return recur;
}

const fastFibo_2 = memoFn(fiboDyn);
start = performance.now();
console.log(fastFibo_2(25), performance.now() - start);
