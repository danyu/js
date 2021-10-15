let curInput = "";
let expr = [];

function onKeyDown(key) {
  switch (key) {
    case "-":
    case "+":
      updateExpr(key);
      break;
    case "=":
      displayResult(calculate());
      reset();
      break;
    case "c":
      reset();
      break;
    // number
    default:
      updateInput(key); //
      break;
  }
}

function updateExpr(key) {
  //   console.log(display);
  // only update when there is preceding number
  if (curInput) {
    expr.push(parseInt(curInput), key);
    curInput = "";
  }
}

function updateInput(key) {
  curInput += key;
}

function reset() {
  curInput = "";
  expr = [];
}

function perfomOp(op, n1, n2) {
  return op === "+" ? n1 + n2 : n1 - n2;
}

function isOps(k) {
  return "+-".indexOf(k) > -1;
}

function calculate() {
  if (curInput !== "") expr.push(parseInt(curInput));
  let result = null;
  let op = "";
  console.log(expr);
  for (let e of expr) {
    if (!isOps(e)) {
      if (result === null) result = e;
      else result = perfomOp(op, result, e);
    } else op = e;
  }
  return result;
}

function displayResult(result) {
  console.log(result);
}

onKeyDown("3");
onKeyDown("3");
onKeyDown("+");
onKeyDown("3");
onKeyDown("2");
onKeyDown("=");
