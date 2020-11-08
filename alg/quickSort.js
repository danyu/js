function swap(ary, i, j) {

}

function split(ary, start, end) {
  let s = ary[start], i = start, sI = start;
  while (i <= end) {
    if (ary[i] < s) {
      swap(ary, i, ++sI);
    }
    i++;
  }
  swap(ary, start, sI);
}

