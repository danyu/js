function one() {
  two();
}

function two() {
  console.log('two')
}

function three() {

}

one();

three();