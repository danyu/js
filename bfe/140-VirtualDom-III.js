//https://bigfrontend.dev/problem/virtual-DOM-III-Functional-Component
/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 * type FunctionComponent = (props: object) => MyElement
 */

/**
 * @param { string | FunctionComponent } type - valid HTML tag name or Function Component
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
  // your code here
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}
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

const h = createElement;
const Title = ({ children, ...res }) => h("h1", res, ...children);

const Link = ({ children, ...res }) => h("a", res, ...children);
const Name = ({ children, ...res }) => h("b", res, ...children);
const Button = ({ children, ...res }) => h("button", res, ...children);
const Paragraph = ({ children, ...res }) => h("p", res, ...children);
const Container = ({ children, ...res }) => h("div", res, ...children);

h(
  Container,
  {},
  h(Title, {}, " this is "),
  h(
    Paragraph,
    { className: "paragraph" },
    " a ",
    h(Button, {}, " button "),
    " from ",
    h(Link, { href: "https://bfe.dev" }, h(Name, {}, "BFE"), ".dev")
  )
);
