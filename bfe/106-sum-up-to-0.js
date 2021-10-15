function findTwo(arr) {
  // your code here
  let map = {};
  return arr.reduce((acc, cur, i) => {
    if (cur === 0) acc.push([i, i]);
    else {
      let target = 0 - cur;
      console.log(cur);
      if (map[target] !== undefined) {
        acc.push([map[target], i]);
      }
      map[cur] = i;
    }
    // console.log(map);
    return acc;
  }, []);
}
console.log(findTwo([1, 2, -1]));
