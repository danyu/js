// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

//
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents_PC = function (n, edges) {
  let paths = []; // can also be a map
  for (let i = 0; i < n; i++) paths[i] = i;

  let parentMap = {};

  edges.forEach(([a, b]) => union(a, b));

  for (let i = 0; i < n; i++) parentMap[find(i)] = true;

  function union(m, n) {
    let parent1 = find(m);
    let parent2 = find(n);
    paths[parent1] = parent2;
  }

  function find(i) {
    if (paths[i] != i) {
      paths[i] = find(paths[i]); // compress the path
    }
    return paths[i];
  }

  console.log(paths);
  return Object.keys(parentMap).length;
};

let cnt = countComponents_PC(5, [
  [0, 1],
  [1, 2],
  [3, 4],
]);
console.log(cnt);
