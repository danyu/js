var Foo = function (a) {
  // This function is not defined.
  // Either window or this doesn't have this method.
  function bar() {
    console.log(a);
  }
  // var a = 1; // This function is defined and is assigned to `this` Object only.
  // So the function can be accessed from a new created instance. // parameter a is accessible from all the nested function defined here.
  this.baz = function () {
    console.log("i", a);
  };
};

Foo.prototype = {
  // function is defined in prototype.
  // new created instance can access to this function.
  // but this function is defined in a different Object,
  // so it can not access to constructor's parameter.
  biz: function () {
    console.log(a);
  },
};

var f = new Foo(8);
// Question1: Observe the function above and tell the result they would print
// for the following function calls.
console.log(f.bar);
// f.bar(); // TypeError, f.bar is not a function.
// f.baz(); // 8
// f.biz(); // ReferenceError, a is not defined

// followup: how to resolve the errors and print expected values.
var Foo = function (a) {
  // Assign defined function to this Object.
  this.bar = function () {
    console.log(a);
  }; // Unchanged
  var a = 100;
  this.baz = function () {
    console.log(a);
  }; // Assign parameter a to this Object.
  this.a = a;
};

Foo.prototype = {
  biz: function () {
    // access a from this, which is the created instance.
    console.log(this.a);
  },
};

// The instance before and after.
instance_before = {
  baz: function () {},
  proto: {
    biz: function () {},
  },
};
// The instance after.
instance = {
  bar: function () {},
  baz: function () {},
  a: 8,
  proto: {
    biz: function () {},
  },
};

f = new Foo(8);
f.a = 12;
// Question1: Observe the function above and tell the result they would print
// for the following function calls.
f.bar(); // TypeError, f.bar is not a function.
f.baz(); // 8
f.biz();
