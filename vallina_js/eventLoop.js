function genNext() {
  let id = 0;
}

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

queueMicrotask(() => {
  console.log("3");
  setTimeout(() => {
    console.log("4");
  }, 0);
});

console.log("5");

// Promise is micro task too
Promise.resolve("6").then((v) => console.log(v));

queueMicrotask(() => {
  console.log("7");
});
