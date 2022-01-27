/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(funcs, max) {
  // your code here
  const total = funcs.length;

  return new Promise((res, rej) => {
    let cnt = 0;
    let curCnt = 0;
    let result = [];
    let isDone = false;

    function run() {
      console.log(cnt, total);
      if (isDone) return;
      while (cnt < total && curCnt < max) {
        curCnt++;
        let idx = cnt;
        console.log("func");
        funcs[idx]
          .then((data) => {
            console.log("done");
            result[idx] = data;
            cnt++;
            curCnt--;
            if (cnt === total) {
              res(result);
              isDone = true;
            } else {
              run();
            }
          })
          .catch((e) => {
            isDone = true;
            rej(e);
          });
      }
    }
    run();
  });
}

var value = 0;
var asyncFactory = function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(value++);
    }, 10);
  });
};

const arr = [];
for (var i = 0; i < 20; i++) {
  arr.push(asyncFactory);
}
// this is the solution function you'll write
const throttled = throttlePromises(arr, 5);
throttled.then(function (results) {
  // expect(results).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])
  console.log(results);
  done();
});
