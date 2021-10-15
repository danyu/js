/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 *
 * Ends as soon as any promise settled.
 */
function race(promises) {
  // your code here
  if (!promises.length) Promise.resolve();
  return new Promise((resolve, reject) => {
    for (let p of promises) {
      Promise.resolve(p).then(resolve, reject);
    }
  });
}

const p1 = new Promise((res, rej) => {
  setTimeout(res, 100, "foo");
});
const p2 = new Promise((res, rej) => {
  setTimeout(res, 200, "bar");
});

const p3 = new Promise((res, rej) => {
  setTimeout(rej, 200, "bar");
});

race([p1, p2, p3]).then((v) => console.log(v));
