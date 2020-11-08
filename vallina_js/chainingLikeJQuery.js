//-----------chaining with function----------
const $ = (function () {

  var Query = function (selector) {
    this.el = document.querySelectorAll(selector);

    this.addClassName = function (name) {
      this.el.forEach(e => e.classList.add(name));
      return this;
    }
    return this;
  }

  // factory
  var initiate = function (selector) {
    return Query(selector);
  }
  return initiate;
})();

$("#el1").addClassName('red');
$('#el2').addClassName('green');

//---------chaining with object----------

const QueryV1 = (el) => ({
  hide: () => {
    el.style.display = 'hidden';
    return this;
  },
  addClass: (className) => {
    el.classList.add(className);
    return this;
  }
});

const $$ = (selector) => QueryV1(document.querySelector());

$('#el3')
  .addClassName('green')
  .addClassName('initialCapital');

  //------chaining with class--------------

  