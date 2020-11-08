var a = 0;

function addNum(num, global) {
  log(arguments);
  var b = 0;
  let c = 0;
  {
    let c = num;
    c = 1;
    var b;
    b = 1;
  };
  // log()(c);
  log('a=' + a, 'b=' + b, 'c=' + c);
  (() => {
    let c = 2;
    c = 10;
    // this b is in a different scope than first b
    var b;
    b = 2;
    var a = 2;
  })();
  log('a=' + a, 'b=' + b, 'c=' + c);
  (() => {
    let c = 3;
    var b = 3;
    global.a = 3;
  })();
  log('a=' + a, 'b=' + b, 'c=' + c);
}

function add() {
  log(_a);
}

var _a = 10;
// log(_a);
addNum(9, window);
// add();