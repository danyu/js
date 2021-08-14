/**The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
 *
 *
 *
 */

function shuffle(arr) {
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    let j = i + Math.floor(Math.random() * (l - i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
