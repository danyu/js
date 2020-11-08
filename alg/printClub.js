function printClub(n) {
  let L = n * 2 - 1;
  let center = [n - 1, n - 1];
  for (let i = 0; i < L; i++) {
    let row = '';
    for (let j = 0; j < L; j++) {
      let dist = Math.abs(i - center[0]) + Math.abs(j - center[1]);
      // console.log(dist);
      if (dist <= n - 1) {
        row += ('*');
      } else {
        row += ('.');
      }
    }
    console.log(row);
  }

}

printClub(3);
printClub(1);
printClub(5);