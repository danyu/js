// object
let obj = {
  z: "z",
  ddfd: 22,
  aaa: "aaa",
  //   {a:1}:11, key can not be object
  22: "22", // numberic keys (22,19) get sorted automatically
  19: "19",
};
console.log("-> object");
Object.keys(obj).forEach((k) => {
  console.log(k); // order not preserved for numeric keys
});

// Map
console.log("-> map");
let map = new Map([["z", "z"]]); // init
map.set(22, "22");
map.set(19, "19");

for (let k of map.keys()) {
  console.log(k); // order preserved for muneric keys
}

// Set
console.log("-> set");
let set = new Set([1, 22, 22, 99, 8, 8, 7, 7, "s"]); // dup elements removed

for (let v of set.values()) {
  console.log(v);
}
