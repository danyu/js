/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
  // your code here
  const vs1 = v1.split(".");
  const vs2 = v2.split(".");

  for (let i = 0; i < vs1.length; i++) {
    let vn1 = parseInt(vs1[i]),
      vn2 = parseInt(vs2[i]);
    if (vn1 > vn2) return 1;
    if (vn1 < vn2) return -1;
  }
  return 0;
}

console.log(compare("12.1.0", "12.0.9"));
// 1, meaning first one is greater

console.log(compare.call(this, "12.1.0", "12.1.2"));
// -1, meaning latter one is greater

console.log(compare("5.0.1", "5.0.1"));
// 0, meaning they are equal.
