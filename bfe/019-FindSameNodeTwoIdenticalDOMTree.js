/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode_recursive = (rootA, rootB, target) => {
  // your code here
  let targetB = null;

  function find(curA, curB) {
    if (!curA || targetB) return;

    if (curA === target) return (targetB = curB);

    for (let i = 0; i < curA.children.length; i++) {
      find(curA.children[i], curB.children[i]);
    }
  }

  find(rootA, rootB);
  return targetB;
};

const findCorrespondingNode_DOMApi = (rootA, rootB, target) => {
  // your code here
  let path = [];
  let cur = target;
  while (cur !== rootA) {
    const p = cur.parentElement;
    path.push(Array.prototype.indexOf.call(p.children, cur));
    cur = p;
  }
  cur = rootB;
  while (path.length) {
    cur = cur.children[path.pop()];
  }
  return cur;
};
