function topK(arr, k) {
  // your code here

  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  function partition(s, e) {
    let pVal = arr[s];
    let pIdx = s;
    for (let i = s + 1; i <= e; i++) {
      if (arr[i] >= pVal) {
        swap(i, ++pIdx);
      }
    }
    swap(s, pIdx);
    return pIdx;
  }

  function quickPick(s, e) {
    const pIdx = partition(s, e);
    if (pIdx > k - 1) {
      quickPick(s, pIdx - 1);
    } else if (pIdx < k - 1) {
      quickPick(pIdx + 1, e);
    } else return;
  }

  function quickSort(s, e) {
    if (s < e) {
      const pIdx = partition(s, e);
      quickSort(s, pIdx - 1);
      quickSort(pIdx + 1, e);
    }
  }

  if (!arr.length || arr.length == 1) return arr;
  quickPick(0, arr.length - 1);
  //   quickSort(0, arr.length - 1);

  return arr.slice(0, k);
}
