const input = [
  "5483143223",
  "2745854711",
  "5264556173",
  "6141336146",
  "6357385478",
  "4167524645",
  "2176841721",
  "6882881134",
  "4846848554",
  "5283751526",
];
const input1 = [
  "3113284886",
  "2851876144",
  "2774664484",
  "6715112578",
  "7146272153",
  "6256656367",
  "3148666245",
  "3857446528",
  "7322422833",
  "8152175168",
];

function countFlashes_part1(ary, it, stopOnSynced) {
  const grid = ary.reduce((acc, row) => {
    acc.push(row.split("").reduce((acc1, ch) => [...acc1, parseInt(ch)], []));
    return acc;
  }, []);

  let R = grid.length;
  let C = grid[0].length;
  //   console.log(grid);
  let totalFlashes = 0;

  let flashedEachStep = {};
  let flashedAllTime = {};

  const increOne = () => {
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) increAdj(r, c);
    }
  };

  const increAdj = (r, c) => {
    if (r < 0 || c < 0 || r >= R || c >= C || flashedEachStep[r + "," + c])
      return;

    grid[r][c]++;
    if (grid[r][c] <= 9) return;

    flashedEachStep[r + "," + c] = true;

    totalFlashes++;
    grid[r][c] = 0;

    [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
    ].forEach(([dr, dc]) => {
      const r1 = r + dr,
        c1 = c + dc;
      increAdj(r1, c1);
    });
  };

  const allFlashing = () => {
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (grid[r][c]) return false;
      }
    }
    return true;
  };

  let i = 0;

  if (stopOnSynced) {
    while (!allFlashing()) {
      flashedEachStep = {};
      increOne();
      i++;
    }
    return i;
  } else {
    while (i < it) {
      flashedEachStep = {};
      increOne();
      // console.log("===>", grid);

      i++;
    }
    return totalFlashes;
  }
}

console.log(countFlashes_part1(input, 100));
console.log(countFlashes_part1(input1, 100));

console.log(countFlashes_part1(input, 100, true));
console.log(countFlashes_part1(input1, 100, true));
