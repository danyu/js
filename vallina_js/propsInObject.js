
(function () {
  console.log('===========propsInObject.js')
  let obj = {
    prop: 'hello',
    prop1: undefined
  };

  console.log(obj['prop']);
  console.log(obj['prop1'] === undefined);
  console.log(obj['prop2']);
  console.log(obj.hasOwnProperty('prop2'));
})();