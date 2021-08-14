/**
 * @param { Array } arr

// iter
* @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1, curDepth = 0) {
  // your imeplementation here
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr));
// [1, 2, 3, [4]]

console.log(flat(arr, 1));
// [1, 2, 3, [4]]

console.log(flat(arr, 2));
// [1, 2, 3, 4]
