function printTimeout() {
  for (var i = 0; i < 5; i++) {
    window.setTimeout(function () { console.log(i); }, i * 100);
  }
}

printTimeout();

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('prom');
  }, 1000);
  setTimeout(function () {
    reject(new Error('!prom'));
  }, 500);
});

promise1.then(function (value) {
  console.log(value);
  return new Promise((resolve, reject) => {
    reject(new Error("!arg"))
  }).catch((err) => {
    console.log(err);
  });
}).catch((err) => {
  console.log(err);
});

// new Promise()