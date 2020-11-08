console.log('-----borrowing-----');

var dinner = {
  meal: 'Pasta',
  getMeal: function (alternative) {
    return alternative || this.meal;
  }
}

var lunch = {
  meal: 'Salad'
}

var whatever = {}

// luch borrowed getMeal from dinner
console.log(dinner.getMeal.apply(lunch));

// whatever borrowed getMeal from dinner
console.log(dinner.getMeal.apply(whatever, ['whatever']));