/**
 * @param {object} obj
 * @param {string | string[]} path
 * @param {any} value
 */
function set(obj, path, value) {
  let props = Array.isArray(path)
    ? path
    : path.replaceAll("[", ".").replaceAll("]", "").split(".");
  //   console.log(props);
  let child = obj;
  props.forEach((prop, i) => {
    if (i == props.length - 1) {
      child[prop] = value;
    } else {
      if (!obj.hasOwnProperty(prop)) {
        const nextProp = props[i + 1];
        child[prop] = String(Number(nextProp)) === next ? [] : {};
      }
      child = child[prop];
    }
  });
  console.log(obj);
}

//test
const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};
set(obj, "a.b.c", "BFE");
console.log(obj.a.b.c); // "BFE"

set(obj, "a.b.c.0", "BFE");
console.log(obj.a.b.c[0]); // "BFE"

set(obj, "a.b.c[1]", "BFE");
console.log(obj.a.b.c[1]); // "BFE"

set(obj, ["a", "b", "c", "2"], "BFE");
console.log(obj.a.b.c[2]); // "BFE"

set(obj, "a.b.c[3]", "BFE");
console.log(obj.a.b.c[3]); // "BFE"

set(obj, "a.c.d[0]", "BFE");
// valid digits treated as array elements
console.log(obj.a.c.d[0]); // "BFE"

set(obj, "a.c.d.01", "BFE");
// invalid digits treated as property string
console.log(obj.a.c.d["01"]); // "BFE"
