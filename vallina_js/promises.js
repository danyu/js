let error = [];
let anyResolved = false;
const fetch1 = new Promise((res, rej) => {
  setTimeout(rej, 800, "err1");
});

const fetch2 = new Promise((res, rej) => {
  setTimeout(res, 300, "ok1");
});
const fetch3 = new Promise((res, rej) => {
  setTimeout(res, 1000, "ok2");
});

// Promise.any([fetch1, fetch2, fetch3]).then((data) => {
//   console.log(data);
//   return;
// });

// reflect
// Promise.all([fetch1, fetch2, fetch3].map(p => {
//   console.log('ref')
//   return p.catch(e => e);
// }))
//   .then(results => console.log(results)) // 1,Error: 2,3
//   .catch(e => console.log(e));

// console.log(error);

Promise.race([fetch1, fetch2, fetch3]).then((data) => {
  console.log(data);
  // return;
});

const promiseAll = function (promises) {
  return new Promise(function (resolve, reject) {
    let result = [];
    let cnt = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((value) => {
          result.push(value);
          cnt++;
          if (cnt == promises.length) {
            resolve(result);
          }
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
};
console.log(" ====> Promise.All");
const promises = [Promise.resolve("p-1"), Promise.resolve("P-2")];
promiseAll(promises).then((value) => console.log(value));
const promises_reject = [
  Promise.resolve("p-1"),
  Promise.reject("P-2 error"),
  Promise.resolve("P-3"),
];

promiseAll(promises_reject)
  .then((value) => console.log(value))
  .catch((e) => {
    console.log(e);
  });
