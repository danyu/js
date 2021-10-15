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
// use parent element
const findCorrespondingNode_DOMApi = (rootA, rootB, target) => {
  // your code here
  let path = [];
  let cur = target;
  while (cur !== rootA) {
    const p = cur.parentElement;
    path.push(Array.prototype.indexOf.call(p.children, cur)); // use array prototype function
    cur = p;
  }
  cur = rootB;
  while (path.length) {
    cur = cur.children[path.pop()];
  }
  return cur;
};

const A = document.createElement("div");
A.setAttribute("id", "#rootA");
A.innerHTML = `
<div>
<div>
  <div>
    <div id="node1"></div>
  </div>
  <div>
  </div>
  <div>
    <div>
      <p id="node2"></p>
    </div>
  </div>
</div>
</div>`;

const B = A.cloneNode(true);
const node1 = A.querySelector("#node1");
const node2 = A.querySelector("#node2");
const node1Target = B.querySelector("#node1");
const node2Target = B.querySelector("#node2");
findCorrespondingNode(A, B, node1);
findCorrespondingNode(A, B, node2);
