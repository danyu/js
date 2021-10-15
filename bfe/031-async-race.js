// use Promise
function race(funcs) {
  // your code here
  const promisify = (func) =>
    new Promise((res, rej) => {
      const callback = (err, data) => (err ? rej(err) : res(data));
      func(callback);
    });

  return function (callback) {
    return Promise.race(funcs.map(promisify))
      .then((v) => callback(undefined, v))
      .catch((e) => {
        callback(e, undefined);
      });
  };
}

// use iterative
// race is simple because all funcs are running in their
// natural speed, just need a global variable to track the first one
// finished.
function race1(funcs) {
  return function (callback) {
    let isDone = false;
    funcs.forEach((fn) => {
      fn((err, data) => {
        if (isDone) return;
        isDone = true;
        if (err) {
          callback(err, data);
        } else callback(undefined, data);
      });
    });
  };
}

const async1 = (callback) => {
  setTimeout(() => callback(undefined, 1), 300);
};

const async2 = (callback) => {
  setTimeout(() => callback(undefined, 2), 100);
};

const async3 = (callback) => {
  setTimeout(() => callback(undefined, 3), 200);
};

const async4 = (callback) => {
  setTimeout(() => callback("something is wrong", 4), 50);
};

const first = race1([async1, async2, async3, async4]);

first((error, data) => {
  console.log(error, data); // 2, since 2 is the first to be given
}, 1);
