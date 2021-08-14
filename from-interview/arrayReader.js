Array.prototype.getReader = function () {
  let ary = this;
  return {
    idx: 0,
    read: function (len) {
      if (len === undefined) len = 0;
      let start = this.idx;
      let end = start + len;

      this.idx = end;

      if (end < ary.length) {
        return ary.slice(start, end);
      } else {
        if (start < ary.length) {
          return ary.slice(start);
        }
        return [];
      }
      return [];
    },
  };
};

let ary = [1, 2, 3, 4, 5];
let reader = ary.getReader();
console.log(reader.read(1));
console.log(reader.read(2));
console.log(reader.read(3));
console.log(reader.read(3));
