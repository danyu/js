const p = Promise.resolve(4).then((v) => [v]);
p.then((v) => console.log(v));

const p1 = Promise.reject("err");

const createReject = () =>
  Promise.resolve(p1).then((v) => {
    console.log("resolved.");
  });

createReject().catch((e) => console.log(e));

Promise.resolve("hi ")
  .then((value) => {
    // return value + " and bar";
  })
  .then((value) => {
    return value + " and bar again";
  })
  .then((value) => {
    return value + " and again";
  })
  .then((value) => {
    return value + " and again";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
