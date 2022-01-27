const small1 = ["start-A", "start-b", "A-c", "A-b", "b-d", "A-end", "b-end"];
const mid = [
  "dc-end",
  "HN-start",
  "start-kj",
  "dc-start",
  "dc-HN",
  "LN-dc",
  "HN-end",
  "kj-sa",
  "kj-HN",
  "kj-dc",
];
const mid1 = [
  "fs-end",
  "he-DX",
  "fs-he",
  "start-DX",
  "pj-DX",
  "end-zg",
  "zg-sl",
  "zg-pj",
  "pj-he",
  "RW-he",
  "fs-DX",
  "pj-RW",
  "zg-RW",
  "start-pj",
  "he-WI",
  "zg-he",
  "pj-fs",
  "start-RW",
];
const large = [
  "TR-start",
  "xx-JT",
  "xx-TR",
  "hc-dd",
  "ab-JT",
  "hc-end",
  "dd-JT",
  "ab-dd",
  "TR-ab",
  "vh-xx",
  "hc-JT",
  "TR-vh",
  "xx-start",
  "hc-ME",
  "vh-dd",
  "JT-bm",
  "end-ab",
  "dd-xx",
  "end-TR",
  "hc-TR",
  "start-vh",
];

function paths_part1(ary) {
  const map = ary.reduce((acc, cur, i) => {
    const [a, b] = cur.split("-");
    if (!acc[a]) acc[a] = [];
    if (!acc[b]) acc[b] = [];
    acc[a].push(b);
    acc[b].push(a);
    return acc;
  }, {});
  //   console.log(map);

  const peek = (ary) => ary[ary.length - 1];
  const isSmallCave = (cave) => {
    let charCode = cave[0].charCodeAt(0);
    return charCode >= 97 && charCode <= 122;
  };

  // BFS
  let paths = [{ route: ["start"], visitedTwice: null }];
  let done = [];

  while (paths.length) {
    // console.log(paths);
    let size = paths.length;
    let nextPaths = [];
    while (size > 0) {
      let path = paths.shift();
      let { route } = path;
      map[peek(route)].forEach((nextCave) => {
        let tempPath = { ...path };
        if (nextCave === "end") {
          tempPath.route = [...route, "end"];
          done.push(tempPath);
          return;
        }

        if (isSmallCave(nextCave) && route.indexOf(nextCave) !== -1) return;

        tempPath.route = [...route, nextCave];
        nextPaths.push(tempPath);
      });
      size--;
    }

    paths = nextPaths;
  }
  //   console.log(done);
  return done.length;
}

function paths_part2(ary) {
  const map = ary.reduce((acc, cur, i) => {
    const [a, b] = cur.split("-");
    if (!acc[a]) acc[a] = [];
    if (!acc[b]) acc[b] = [];
    acc[a].push(b);
    acc[b].push(a);
    return acc;
  }, {});
  //   console.log(map);

  const peek = (ary) => ary[ary.length - 1];
  const isSmallCave = (cave) => {
    let charCode = cave[0].charCodeAt(0);
    return charCode >= 97 && charCode <= 122;
  };

  // BFS
  let paths = [{ route: ["start"], visitedTwice: null, visited: {} }];
  let done = [];

  while (paths.length) {
    // console.log(paths);
    let size = paths.length;
    let nextPaths = [];
    while (size > 0) {
      let path = paths.shift();
      let { route, visited, visitedTwice } = path;
      map[peek(route)].forEach((nextCave) => {
        if (nextCave === "start") return;

        if (nextCave === "end") {
          done.push({
            route: [...route, "end"],
            visited: { ...visited },
            visitedTwice: visitedTwice,
          });
          return;
        }

        if (!isSmallCave(nextCave)) {
          nextPaths.push({
            route: [...route, nextCave],
            visited: { ...visited },
            visitedTwice: visitedTwice,
          });
          return;
        }
        //small caves
        let _visited = { ...visited };
        let _visitedTwice = visitedTwice;
        if (_visited[nextCave]) {
          if (visitedTwice) return;
          _visitedTwice = nextCave;
        } else _visited[nextCave] = true;

        nextPaths.push({
          route: [...route, nextCave],
          visited: _visited,
          visitedTwice: _visitedTwice,
        });
      });
      size--;
    }

    paths = nextPaths;
  }
  //   console.log(done);
  return done.length;
}

console.log(paths_part1(small1));
console.log(paths_part1(mid));
console.log(paths_part1(mid1));
console.log(paths_part1(large));

console.log(paths_part2(small1));
console.log(paths_part2(mid));
console.log(paths_part2(mid1));
console.log(paths_part2(large));
