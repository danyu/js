/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
function flattenThunk(thunk) {
  // your code here

  return function (finalCB) {
    const cb = (error, result) => {
      if (error) finalCB(error, undefined);
      else {
        if (typeof result === "function") {
          result(cb);
        } else finalCB(undefined, result);
      }
    };

    thunk(cb);
  };
}
