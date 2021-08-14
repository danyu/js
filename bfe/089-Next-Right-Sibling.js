/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
function nextRightSibling(root, target) {
  // your code here
  let q = [root];
  while (q.length) {
    let l = q.length;
    let lvl = [];
    let targetI = -1;
    while (l > 0) {
      let children = q.shift().children;
      for (let i = 0; i < children.length; i++) {
        lvl.push(children[i]);
        if (children[i] === target) targetI = lvl.length - 1;
      }
      l--;
    }
    if (targetI !== -1) return lvl[targetI + 1] || null;
    q = lvl;
  }
}
