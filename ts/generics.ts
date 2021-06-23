let last = <T>(arr: Array<T>) => {
  return arr.length && arr[arr.length - 1];
};

console.log(last([1, 2, 3]));

let lastStr = last([1, "2", "4"]);
console.log(lastStr);

function hello(): void {
  let i = 0;
}
