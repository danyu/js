function swap(ary, i, j) {
  [ary[i], ary[j]] = [ary[j], ary[i]];
}

function partition(ary, start, end) {
  let pivot = ary[start],
    swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (ary[i] < pivot) {
      swap(ary, i, ++swapIdx);
    }
  }
  swap(ary, start, swapIdx);
  return swapIdx;
}

function quickSort(ary, start = 0, end = ary.length - 1) {
  if (start < end) {
    let p = partition(ary, start, end);
    quickSort(ary, start, p - 1);
    quickSort(ary, p + 1, end);
  }
  return ary;
}

console.log(quickSort([1, 3, 7, 3, 11, 6, 5]));
