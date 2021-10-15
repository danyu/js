/**
 * @param {number} n
 * @return {'A' | 'B' | null}
 */
function canWinStonePicking(n) {
  // your code here

  let mem = {};
  function helper(p1, p2, i) {
    let key = p1 + i;
    if (i == 1) return p2;
    if (i <= 3) return p1;
    if (mem[key]) return mem[key];
    if (helper(p2, p1, i - 1) == p1 || helper(p2, p1, i - 2) == p1)
      mem[key] = p1;
    else mem[key] = p2;
    return mem[key];
  }

  return helper("A", "B", n);
}

console.log(canWinStonePicking(100));
