function parallel_1(funcs) {
  return function (done) {
    let error;
    const result = [];

    funcs.forEach((func, idx) => {
      func((err, data) => {
        if (error) return;

        if (err) {
          error = err;
          done(error, data);
        } else {
          result[idx] = data;
          if (result.length >= funcs.length) {
            done(error, result);
          }
        }
      });
    });
  };
}

// with promise
function parallel_2(funcs) {
  const promisify = (func, data) =>
    new Promise((res, rej) => {
      const cb = (err, data) => (err ? rej(err) : res(data));
      func(cb, data);
    });

  return (callback, input) => {
    Promise.all(funcs.map((fn) => promisify(fn, input)))
      .then((outputs) => callback(undefined, outputs))
      .catch((err) => callback(err, undefined));
  };
}

const async1 = (callback) => {
  callback(undefined, 1);
};

const async2 = (callback) => {
  callback(undefined, 2);
};

const async3 = (callback) => {
  callback(undefined, 3);
};

const all = parallel_1([async1, async2, async3]);

all((error, data) => {
  console.log(data); // [1, 2, 3]
}, 1);

const all_2 = parallel_2([async1, async2, async3]);
all_2((error, data) => {
  console.log(data); // [1, 2, 3]
}, 1);
