/**
 *
 * Promise.any() takes an iterable of Promise objects and,
 * as soon as one of the promises in the iterable fulfils,
 * returns a single promise that resolves with the value from that promise.
 */

function any(promises) {
  // your code here
  return new Promise((res, rej) => {
    let errors = [];
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((v) => res(v))
        .catch((e) => {
          errors[i] = e;
          if (errors.length === promises.length)
            rej(
              new AggregateError(
                "No Promise in Promise.any was resolved",
                errors
              )
            );
        });
    });
  });
}

const promises = [
  Promise.reject("Error"),
  Promise.resolve("2"),
  Promise.resolve(3),
];

any(promises)
  .then((v) => console.log(v))
  .catch((e) => console.log(e));
