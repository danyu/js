/**
 * @param {string} str
 * @returns {Number}
 */
function calculate(str) {
  // helper functions
  const peek = (ary) => ary[ary.length - 1];
  const calc = (t, num1, num2) => {
    switch (t) {
      case "+":
        return num2 + num1;
      case "-":
        return num2 - num1;
      case "*":
        return num2 * num1;
      case "/":
        return num2 / num1;
    }
  };

  // 1: get all tokens
  const tokens = str.replaceAll(" ", "").match(/(\d+)|[\+\-\*\/\(\)]/g);
  // priority map, deciding which operands can be calculated first
  const prioMap = { "-": 1, "+": 1, "*": 2, "/": 2, "(": 4, ")": 4 };

  // 2: gen reverse polish notation,
  function genRPN() {
    let rpn = [],
      ops = [];
    for (let k of tokens) {
      if (k === "(") ops.push(k);
      else if (k === ")") {
        while (ops.length && peek(ops) !== "(") rpn.push(ops.pop());
        ops.pop(); // remove '('
      } else if (prioMap[k]) {
        // handle op
        if (!ops.length) ops.push(k);
        else {
          let lstOp = peek(ops);
          if (lstOp == "(" || prioMap[k] > prioMap[lstOp]) ops.push(k);
          else {
            rpn.push(ops.pop());
            ops.push(k);
          }
        }
      } else {
        rpn.push(parseInt(k)); // push number
      }
    }
    while (ops.length) rpn.push(ops.pop());
    return rpn;
  }

  // 3: calculate, it is quite simple beacuase of reverse-polish-notation
  function calculateRPN(RPN) {
    let stk = [];
    for (let e of RPN) {
      if (prioMap[e]) stk.push(calc(e, stk.pop(), stk.pop()));
      else stk.push(e); // take number and wait for calculation
      // console.log(stk);
    }
    return stk[0];
  }

  const RPN = genRPN();
  const result = calculateRPN(RPN);

  return result;
}

let result = calculate(" (2 - 3) / ( 3/3*3/3 - 1   )");
console.log(result);
result = calculate(" (3 *      3 - 8 - 1) / (2 *(1 + 1)  - 4)");
console.log(result);
result = calculate(" 1/0 + (99 - 1000)/(3-3)");
console.log(result);
result = calculate("   (2 * (3 + 4 * (5 + 6))) / 2       ");
console.log(result);
result = calculate("(111+1)*8/2");
console.log(result);
