function mySetInterval(func, interval, ...args) {
  let id = {};

  function recur() {
    func(args);
    if (id.val) {
      id.val = setTimeout(recur, interval);
    }
  }
  id.val = setTimeout(recur, interval);
  return id;
}

function myClearInterval(id) {
  id.val = null;
  clearTimeout(id.val);
}

let id = mySetInterval(() => console.log("hello"), 400);
setTimeout(() => {
  myClearInterval(id);
}, 2000);
