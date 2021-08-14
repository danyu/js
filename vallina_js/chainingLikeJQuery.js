//-----------chaining with function----------
function $(selector) {
  var wrapper = function () {
    this.el = document.querySelectorAll(selector);

    this.addClassName = function (name) {
      this.el.forEach((e) => e.classList.add(name));
      return this;
    };
    this.fontSize = function (size) {
      this.el.forEach((e) => {
        e.style.fontSize = size;
      });
      return this;
    };
    return this;
  };

  return wrapper();
}

$("#el1").addClassName("red");
$("#el2").addClassName("green").fontSize("40px");

//---------chaining with object----------

const QueryV1 = function (el) {
  return {
    el: el,
    fontSize: function (size = "12px") {
      this.el.style.fontSize = size;
      return this;
    },
    addClassName: function (className) {
      el.classList.add(className);
      return this;
    },
  };
};

const $$ = (selector) => QueryV1(document.querySelector(selector));

// console.log($$('#el3'));
$$("#el3").fontSize("28px").addClassName("red").addClassName("initialCapital");

//------chaining with class--------------
