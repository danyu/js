/**
 * @param { Array } arr

// recusive
* @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1, curDepth = 0) {
  // your imeplementation here
  if (curDepth >= depth) {
    return arr;
  }
  return arr.reduce((acc, cur) => {
    if (!Array.isArray(cur)) {
      acc.push(cur);
    } else {
      acc = acc.concat(flat(cur, depth, curDepth + 1));
    }
    return acc;
  }, []);
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr));
// [1, 2, 3, [4]]

console.log(flat(arr, 1));
// [1, 2, 3, [4]]

console.log(flat(arr, 2));
// [1, 2, 3, 4]
