function retryCalls(funcs, duration) {
  let timeIsUp = false;
  let resultCnt = 0;
  let results = [];

  let timeout = setTimeout(() => (timeIsUp = true), duration);

  funcs.forEach((func, i) => retry(func, i));

  function retry(func, i) {
    // return conditions
    if (resultCnt < funcs.length && timeIsUp) {
      throw new Error("Failed");
    }

    const callback = (data, error) => {
      if (error) {
        // retry with timeout to avoid max stack call
        console.log(error);
        retry(func, i);
      } else {
        resultCnt++;
        results[i] = data;
        // console.log(results);
        if (resultCnt == funcs.length) {
          clearTimeout(timeout);
          return results;
        }
      }
    };

    func(callback);
  }
}
let tryCnt = 0;
function getData1(callback) {
  if (tryCnt++ < 20) callback(null, new Error("server1 is busy"));
  else callback(tryCnt, null);
}

function getData2(callback) {
  if (tryCnt++ < 10) callback(null, new Error("server2 is busy"));
  else callback(tryCnt, null);
}

try {
  let rst = retryCalls([getData1, getData2], 0);
  console.log(rst);
} catch (e) {
  console.log(e);
}
