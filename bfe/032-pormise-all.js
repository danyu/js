//v1
function all_v1(promises) {
  if (!promises.length) return Promise.resolve(promises);

  let result = [];
  let cnt = 0;
  return new Promise((res, rej) => {
    promises.forEach((p) => {
      Promise.resolve(p)
        .then((v) => {
          result.push(v);
          cnt++;
          if (cnt === promises.length) res(result);
        })
        .catch((e) => rej(e));
    });
  });
}

//v2
function all_v2(promises) {
  return promises.reduce((acc, cur) => {
    return acc.then((results) =>
      Promise.resolve(cur).then((r) => [...results, r])
    );
  }, Promise.resolve([]));
}

all_v1([1, 2, 3, Promise.resolve(4)]).then((v) => console.log(v));
all_v2([1, 2, 3, Promise.resolve(4)]).then((v) => console.log(v));
