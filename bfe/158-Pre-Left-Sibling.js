// https://bigfrontend.dev/problem/previous-left-sibling

/**
 * @param {Element} root
 * @param {Element} target
 * @return {Elemnt | null}
 */
function previousLeftSibling(root, target) {
  // your code here
  let q = [root];

  while (q.length) {
    let l = q.length;
    let lvl = [];
    while (l > 0) {
      let curN = q.shift();

      for (let ch of curN.children) {
        if (target === ch) {
          // return left sib immediately
          return lvl.pop() || null;
        }
        lvl.push(ch);
      }
      l--;
    }
    q = lvl;
  }

  return null;
}
