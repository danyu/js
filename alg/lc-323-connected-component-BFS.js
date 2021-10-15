// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

//
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents_BFS = function (n, edges) {
  // build map for quick access of edges
  let mapEdges = edges.reduce((acc, [a, b]) => {
    if (!acc[a]) acc[a] = [];
    if (!acc[b]) acc[b] = [];
    acc[a].push(b);
    acc[b].push(a);
    return acc;
  }, {});

  // console.log('map', mapEdges);
  let visitedNodes = {};
  let visitedEdges = {};
  let q = [];
  // BFS
  function BFS(start) {
    q = mapEdges[start] || [];
    visitedEdges = {};
    visitedNodes[start] = true;
    while (q.length) {
      // console.log(q);
      let n1 = q.pop();
      visitedNodes[n1] = true;
      for (let n2 of mapEdges[n1] || []) {
        if (visitedEdges[n1] == n2) continue;
        visitedEdges[n1] = n2;
        if (visitedNodes[n2]) continue;
        q.push(n2);
      }
    }
  }

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (!visitedNodes[i]) {
      BFS(i);
      cnt++;
      // visited;
    }
    // console.log(visitedNodes, visitedEdges);
  }

  return cnt;
};

let cnt = countComponents_BFS(5, [
  [0, 1],
  [1, 2],
  [3, 4],
]);
console.log(cnt);
