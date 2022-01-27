const small = [3, 4, 3, 1, 2];
const large = [
  3, 5, 1, 5, 3, 2, 1, 3, 4, 2, 5, 1, 3, 3, 2, 5, 1, 3, 1, 5, 5, 1, 1, 1, 2, 4,
  1, 4, 5, 2, 1, 2, 4, 3, 1, 2, 3, 4, 3, 4, 4, 5, 1, 1, 1, 1, 5, 5, 3, 4, 4, 4,
  5, 3, 4, 1, 4, 3, 3, 2, 1, 1, 3, 3, 3, 2, 1, 3, 5, 2, 3, 4, 2, 5, 4, 5, 4, 4,
  2, 2, 3, 3, 3, 3, 5, 4, 2, 3, 1, 2, 1, 1, 2, 2, 5, 1, 1, 4, 1, 5, 3, 2, 1, 4,
  1, 5, 1, 4, 5, 2, 1, 1, 1, 4, 5, 4, 2, 4, 5, 4, 2, 4, 4, 1, 1, 2, 2, 1, 1, 2,
  3, 3, 2, 5, 2, 1, 1, 2, 1, 1, 1, 3, 2, 3, 1, 5, 4, 5, 3, 3, 2, 1, 1, 1, 3, 5,
  1, 1, 4, 4, 5, 4, 3, 3, 3, 3, 2, 4, 5, 2, 1, 1, 1, 4, 2, 4, 2, 2, 5, 5, 5, 4,
  1, 1, 5, 1, 5, 2, 1, 3, 3, 2, 5, 2, 1, 2, 4, 3, 3, 1, 5, 4, 1, 1, 1, 4, 2, 5,
  5, 4, 4, 3, 4, 3, 1, 5, 5, 2, 5, 4, 2, 3, 4, 1, 1, 4, 4, 3, 4, 1, 3, 4, 1, 1,
  4, 3, 2, 2, 5, 3, 1, 4, 4, 4, 1, 3, 4, 3, 1, 5, 3, 3, 5, 5, 4, 4, 1, 2, 4, 2,
  2, 3, 1, 1, 4, 5, 3, 1, 1, 1, 1, 3, 5, 4, 1, 1, 2, 1, 1, 2, 1, 2, 3, 1, 1, 3,
  2, 2, 5, 5, 1, 5, 5, 1, 4, 4, 3, 5, 4, 4,
];

const DAYS_18 = 18;
const DAYS_80 = 80;
const DAYS_256 = 256;
const mem = {};

function lanternFish_part1(ary, days) {
  let total = ary.length;
  ary.forEach((n) => (total += genFish(n, days)));
  return total;
}

function genFish(initTimer, days) {
  let key = initTimer + "," + days;
  if (mem[key]) return mem[key];

  if (days <= 0) return 0;
  let restDays = days;
  let curTimer = initTimer;
  let total = 0;
  while (restDays > curTimer) {
    restDays -= curTimer + 1;
    curTimer = 6;
    total += 1;
    total += genFish(8, restDays); // new generation
  }

  mem[key] = total;

  return total;
}

console.log(lanternFish_part1(small, DAYS_18));
console.log(lanternFish_part1(small, DAYS_80));
console.log(lanternFish_part1(small, DAYS_256));

console.log(lanternFish_part1(large, DAYS_18));
console.log(lanternFish_part1(large, DAYS_80));
console.log(lanternFish_part1(large, DAYS_256));
