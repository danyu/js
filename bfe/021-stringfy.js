/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
  if (
    data === null ||
    data === undefined ||
    data === Infinity ||
    data === -Infinity ||
    Number.isNaN(data)
  )
    return "null";
  if (Infinity === data) return "null";
  let type = Object.prototype.toString
    .call(data)
    .split(" ")[1]
    .replace("]", "");
  switch (type) {
    case "Symbol":
      return "null";
    case "BigInt":
      throw "error";
    case "String":
      return `"${data}"`;
    case "Number":
    case "Boolean":
      return `${data}`;
    case "Date":
      return `"${Date.prototype.toISOString.call(data)}"`;
    case "Array":
      return `[${data.map((e) => stringify(e)).join(",")}]`;
    case "Object":
    case "Map":
      let pairStr = [];
      Object.entries(data).forEach(([k, v]) => {
        if (v === undefined) return;
        pairStr.push(`"${k}":${stringify(v)}`);
      });
      return `{${pairStr.join(",")}}`;
  }
}
