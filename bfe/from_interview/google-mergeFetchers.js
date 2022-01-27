// google
function mergeFetchWithTimer_Sequence(funcs, timeOut) {
  var idx = 0;
  var isTimeOut = false;
  var fetchTimeout = null;

  return function (finalCB, prefix) {
    const cb = (error, data) => {
      if (error || isTimeOut) finalCB(error, data);
      else {
        idx++;
        clearTimeout(fetchTimeout);
        if (idx === funcs.length) finalCB(error, data);
        else funcs[idx](cb, data);
      }
    };
    funcs[idx](cb, prefix);
    fetchTimeout = setTimeout(() => (isTimeOut = true), timeOut);
  };
}

function mergeFetchWithTimer_Parallel(funcs, timeOut) {
  var results = [];
  var resultCnt = 0;
  var isTimeOut = [];
  var isCancelRest = false;

  return function (finalCB, prefix) {
    const cb = (data, i) => {
      if (isTimeOut[i]) {
        isCancelRest = true;
        finalCB([]);
      } else {
        resultCnt++;
        results[i] = data;
        if (resultCnt === funcs.length) finalCB(results);
      }
    };

    for (let i = 0; i < funcs.length; i++) {
      if (isCancelRest) break;
      setTimeout(() => (isTimeOut[i] = true), timeOut);
      func(prefix, (data) => cb(data, i));
    }
  };
}
