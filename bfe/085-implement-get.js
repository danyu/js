/**
 * _.get(object, path, [defaultValue]) is a handy method to help retrieving data from an arbitrary object. 
 * if the resolved value from path is undefined, defaultValue is returned.
 * Can you create your own get()?
 * /

/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(source, path, defaultValue = undefined) {
  const props = Array.isArray(path)
    ? path
    : path.replaceAll("[", ".").replaceAll("]", "").split(".");
  let curNode = source;
  for (let i = 0; i < props.length; i++) {
    // get cur prop's value
    let propVal = curNode[props[i]];
    // handle default
    if (propVal === undefined) return defaultValue;
    // return when it is done.
    if (i === props.length - 1) return propVal;
    // move to child
    else curNode = propVal;
  }
}

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

get(obj, "a.b.c"); // [1,2,3]
get(obj, "a.b.c.0"); // 1
get(obj, "a.b.c[1]"); // 2
get(obj, ["a", "b", "c", "2"]); // 3
get(obj, "a.b.c[3]"); // undefined
get(obj, "a.c", "bfe"); // 'bfe'
