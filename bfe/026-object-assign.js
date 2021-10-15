/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
  if (!target) {
    throw "err";
  }
  let to = Object(target);
  sources.forEach(
    (src) =>
      src && Object.defineProperties(to, Object.getOwnPropertyDescriptors(src))
  );
  return to;
}

console.log(objectAssign({}, "hello"));
