function stringRepeat(str, rep) {
  if (!rep) return "";
  let res = str;
  let cnt = 1;
  while (cnt <= rep) {
    if (cnt * 2 <= rep) {
      res += res;
      cnt = cnt * 2;
    } else {
      res += stringRepeat(str, rep - cnt);
      break;
    }
  }

  return res;
}

console.log(stringRepeat("abc", 12));
