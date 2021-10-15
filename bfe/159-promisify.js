/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
function promisify(func) {
  return function (...args) {
    return new Promise((res, rej) => {
      const callback = (err, data) => {
        if (err) rej(err);
        else res(data);
      };
      // include this here in case func is in an object,
      // and func need access to other attributes as arguements
      func.call(this, ...args, callback);
    });
  };
}

// == test1
function func_1(arg1, arg2, arg3, arg4, arg5, callback) {
  setTimeout(() => {
    callback(null, "success");
  }, 50);
}
const promisified = promisify(func_1);
promisified(1, 2, 3, 4, 5).then((data) => {
  // expect(data).toBe("success");
  console.log(data);
  // done();
});

// == test2
function func_2(arg1, arg2, arg3, callback) {
  setTimeout(() => {
    callback(null, this.foo);
  }, 50);
}

const obj = {
  foo: "BFE",
  promisified: promisify(func_2),
};

obj.promisified(1, 2, 3).then((data) => {
  // expect(data).toBe("BFE");
  console.log(data);
  // done();
});
