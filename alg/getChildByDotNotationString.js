var ary = ['a', 'b', 'c'];
console.log(ary['0']);

var object = { 'a': [{ 'b': { 'c': 3 } }] };
console.log(get(object, 'a[0].b.c'));
console.log(get1(object, 'a[0].b.c'));

function get(obj, expr) {
  expr = expr.replace(/\[/g, '.').replace(/\]/g, '', '.');
  // console.log(expr);
  return expr.split('.').reduce((o, cur) => {
    return cur ? o[cur] : o;
  }, obj);
}


function get1(o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, '');           // strip a leading dot
  var a = s.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
}
