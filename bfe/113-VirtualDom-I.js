/**
 * @param {HTMLElement}
 * @return {object} object literal presentation
 */
function virtualize(element) {
  // your code here
  // console.log('hello')

  let props = {};
  let type = element.tagName.toLowerCase();

  for (let attr of element.attributes) {
    const name = attr.name === "class" ? "className" : attr.name;
    props[name] = attr.value;
  }

  let children = [];
  for (let ch of element.childNodes) {
    if (ch.nodeType === 3) {
      children.push(ch.textContent);
    } else if (ch.nodeType === 1) {
      children.push(virtualize(ch));
    }
  }

  props.children = children.length === 1 ? children[0] : children;

  return { type, props };
}

/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement}
 */
function render(obj) {
  // your code here
  if (!obj) return null;
  if (typeof obj === "string") return obj;

  let {
    type,
    props: { children, ...attrs },
  } = obj;

  let ele = document.createElement(type);

  for (let k of Object.keys(attrs)) {
    ele.setAttribute(k === "className" ? "class" : k, attrs[k]);
  }

  if (!Array.isArray(children)) {
    let child = render(children);
    if (typeof child === "string") ele.innerHTML += child;
    else ele.append(child);
  } else
    for (let ch of children) {
      ele.append(render(ch));
    }

  return ele;
}
