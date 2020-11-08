
console.log('-----currying-----');
/***
 * Currying refers to the process of transforming a 
 * function with multiple arguements into the same function with less arguements
 */
function makeCoffee(coffee, cream) {
  return coffee + ', ' + cream;
}

console.log(makeCoffee('coffe', '2% fat milk'));
var makeDecaf = makeCoffee.bind(null, null, 'decaf');
console.log(makeDecaf('skim milk'));