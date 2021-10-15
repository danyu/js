function path(edges, start, end) {
  // { from: [to_1, to_2] }
  const mapFromTo = edges.reduce((acc, cur, i) => {
    const [from, to] = cur;
    if (!acc[from]) acc[from] = [];
    acc[from].push(to);
    return acc;
  }, {});

  // bfs
  let queue = [start];
  let visited = {};
  let dist = 0;
  while (queue.length) {
    dist++;
    let size = queue.length;
    let nextQ = [];
    while (size > 0) {
      let from = queue.pop();
      visited[from] = true;
      for (let to of mapFromTo[from] || []) {
        if (to === end) return dist;
        if (!visited[to]) nextQ.push(to);
      }
      size--;
    }
    queue = nextQ;
  }

  return -1;
}

const edges = [
  [1, 3],
  [1, 2],
  [2, 4],
  [4, 5],
  [3, 5],
  [3, 1],
];

console.log(path(edges, 1, 5));
