// google
function mergeFetchWithTimer_Sequence(funcs, timeOut) {
  var idx = 0;
  var isTimeOut = false;
  var fetchTimeout = null;

  return function (finalCB, num) {
    const cb = (error, data) => {
      if (error || isTimeOut) finalCB(error, data);
      else {
        idx++;
        clearTimeout(fetchTimeout);
        if (idx === funcs.length) finalCB(error, data);
        else funcs[idx](cb, data);
      }
    };
    funcs[idx](cb, num);
    fetchTimeout = setTimeout(() => (isTimeOut = true), timeOut);
  };
}

function mergeFetchWithTimer_Parallel(funcs, timeOut) {
  var idx = 0;
  var isTimeOut = false;
  var fetchTimeout = null;

  return function (finalCB, num) {
    const cb = (error, data) => {
      if (error || isTimeOut) finalCB(error, data);
      else {
        idx++;
        clearTimeout(fetchTimeout);
        if (idx === funcs.length) finalCB(error, data);
        else funcs[idx](cb, data);
      }
    };
    funcs[idx](cb, num);
    fetchTimeout = setTimeout(() => (isTimeOut = true), timeOut);
  };
}
