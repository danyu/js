/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
function promisify(func) {
  // your code here

  return function (...args) {
    return new Promise((res, rej) => {
      const callback = (err, data) => {
        if (err) rej(err);
        else res(data);
      };
      func.apply(this, [...args, callback]);
    });
  };
}
