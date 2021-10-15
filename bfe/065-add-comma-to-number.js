function addComma(num) {
  // your code here
  let numStr = num + "";
  let dotIdx = numStr.indexOf(".");
  let end = dotIdx === -1 ? numStr.length : dotIdx;
  console.log("end", end);
  let result = numStr.substring(end);
  for (let i = end - 1; i > -1; i--) {
    result = numStr[i] + result;
    if (
      i !== 0 &&
      numStr[i - 1] !== "+" &&
      numStr[i - 1] !== "-" &&
      (end - i) % 3 === 0
    )
      result = "," + result;
  }
  return result;
}

console.log(addComma("-12345678"));
console.log(addComma("-123456.78"));
