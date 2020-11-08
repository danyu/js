
log('-----generator');
function* nextNum(value) {
  let num1 = yield value++;
  console.log('num1: ' + num1);
  yield value++;
  console.log('take a break');
  yield 'continue';
  yield* relay(value);
  yield value;
}

function* relay(v) {
  yield v++;
}
const gnr = nextNum(6);
console.log(gnr.next().value);
console.log(gnr.next().value);
console.log(gnr.next().value);
console.log(gnr.next().value);
console.log(gnr.next().value);

log('-----fibonacci via generator');
var fibonacci = function* () {
  var pre = 0, cur = 1;
  for (; ;) {
    var temp = pre;
    pre = cur;
    cur += temp;
    yield cur;
  }
}()

for (var n of fibonacci) {
  // truncate the sequence at 10
  if (n > 10)
    break;
  console.log(n);
}

function* fetchGenerator() {
  var data = yield fetchData();
  console.log(data.length);
  yield 1;
}

// let fetch = window.fetch;
function fetchData() {
  const url = 'https://raw.githubusercontent.com/danyu/dinopediadata/master/dinos.json';

  window.fetch(url)
    .then((response) => { return response.json() })
    .then((data) => {
      console.log(data.length)
      gen.next(data);
    });

  // return promise;
}

var gen = fetchGenerator();
gen.next();
// console.log(gen.next().value.then(res => console.log(res.length)));