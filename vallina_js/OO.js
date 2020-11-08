
function Plant() {
  let name = '';
  Object.defineProperty(this,
    {
      get: function () {
        return name;
      }
    }
  );
}


