let str = "12*(32-1)*(7+7)/12";
let match_tokens = /(\d+)|[\+\-\*\/\(|\))]/g;

console.log(str.match(match_tokens).join(", "));

let match_word = /(\w+)/g;
str = "fdfd,fdsa f111dsa . ddd";
console.log(str.match(match_word));

let match_keys = /\{\{\w+\}\}/g;
str = "{{fdfdAfdsa}} f111dsa . ddd";
console.log(str.match(match_keys));
