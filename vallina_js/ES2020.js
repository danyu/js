let CAR = {
  make: "honda",
  model: "sedan",
  year: 2012,
  wheels: 4,
  APac: {
    bluetooth: true,
  },
};
console.log("nullish");
let hasTitle = CAR.title ?? "No Title";
console.log(hasTitle);
let supportBlurtooth = CAR.APac ?? bluetooth;
console.log(supportBlurtooth);
console.log(CAR?.name?.length);
