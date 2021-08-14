//v1
function all_V1(promises) {
  // your code here
  let result = [];
  let cnt = 0;

  if (!promises.length) return Promise.resolve(promises);

  return new Promise((resolve, reject) => {
    function onResolve(val) {
      result.push(val);
      cnt++;
      if (cnt == promises.length) {
        console.log("done");
        resolve(result);
      }
    }

    for (let i = 0; i < promises.length; i++) {
      let p = promises[i];
      if (!p || typeof p.then !== "function") {
        onResolve(p);
      } else {
        p.then((val) => {
          onResolve(val);
        }).catch((e) => reject(e));
      }
    }
  });
}

//v2
function all_v2(promises) {
  return promises.reduce((accm, curr) => {
    return accm.then((results) =>
      Promise.resolve(curr).then((r) => [...results, r])
    );
  }, Promise.resolve([]));
}

console.log(all([1, 2, 3, Promise.resolve(4)]));
