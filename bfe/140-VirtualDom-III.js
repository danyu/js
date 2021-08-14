//https://bigfrontend.dev/problem/virtual-DOM-III-Functional-Component

/**
 * @param { MyElement }
 * @returns { HTMLElement }
 */
function render(myElement) {
  // your code here
  if (typeof myElement === "string") {
    return myElement;
  }

  const {
    type,
    props: { children, ...attrs },
  } = myElement;

  let node;
  if (typeof type === "function") return render(type({ children, ...attrs }));

  node = document.createElement(type);
  for (let [k, v] of Object.entries(attrs)) {
    node[k] = v;
  }

  for (let ch of children) {
    node.append(render(ch));
  }

  return node;
}
