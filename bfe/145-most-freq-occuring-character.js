/**
 * Given a non-empty string, return the most frequently ocurring character.

If there are multiple characters with same occurrance, return an array of them.

count('abbccc')
// 'c'

count('abbcccddd')
// ['c', 'd']
Follow-up: What is the time & space complexity of your approach?
 */

/**
 * @param {string} str
 * @returns {string | string[]}
 */

function count(str) {
  // your code here
  let m = 0;
  let map = {};
  //o(N)
  str.split("").forEach((c) => {
    if (!map[c]) map[c] = 0;
    map[c]++;
    m = Math.max(m, map[c]);
  });
  //o(M): M = number of distinct characters
  let chs = Object.keys(map).filter((k) => map[k] === m);
  if (chs.length == 1) return chs[0];
  else return chs;
}
