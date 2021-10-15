function sequence(funcs) {
  var idx = 0;
  return function (finalCB, num) {
    const cb = (error, data) => {
      if (error) finalCB(error, data);
      else {
        idx++;
        if (idx === funcs.length) finalCB(error, data);
        else funcs[idx](cb, data);
      }
    };
    funcs[idx](cb, num);
  };
}

// google
function sequenceWithTimer(funcs, timeOut) {
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

const asyncTimes1 = (callback, num) => {
  setTimeout(() => callback(null, num * 4), 100);
};
const asyncTimes2 = (callback, num) => {
  setTimeout(() => callback(null, num * 2), 100);
};
const asyncTimes4 = sequence([asyncTimes1, asyncTimes2, asyncTimes2]);

asyncTimes4((error, data) => {
  console.log(data); // 16
}, 1);
