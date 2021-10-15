function* tokenize(str) {
  // your code here
  let sym = "";
  str = str.replaceAll(" ", "");
  //   console.log(str);
  let i = 0,
    last = 0;
  while (i < str.length) {
    while (!sym[str[i]]) i++;
    if (last !== i) yield str.substring(last, i);
    yield str[i++];
    last = i;
  }
}

function* tokenize_1(str) {
  let tokens = str.match(/(\d+)|[\+\-\*\/\(\)]/g);
  for (let i = 0; i < tokens.length; i++) {
    yield tokens[i];
  }
}

const tokens = tokenize(" 1 * (20 -   300      ) ");

while (true) {
  let token = tokens.next();
  if (token.done) {
    break;
  }
  console.log(token.value);
}
