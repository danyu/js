class MyPromise {
  Status = {
    working: 1,
    resolved: 2,
    rejected: 3,
  };
  constructor(handler) {
    this.status = this.Status.working;

    const resolve = (val) => {
      if (this.status === this.Status.working) {
        this.status = this.Status.resolved;
        this.val = val;
      }
    };

    const reject = (val) => {
      if (this.status === this.Status.working) {
        this.status = this.Status.rejected;
        this.val = val;
      }
    };

    try {
      handler(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(res, rej) {
    if (this.status === this.Status.resolved) {
      res(this.val);
    }
    if (this.status === this.Status.rejected) {
      rej(this.val);
    }
  }

  static resolve(v) {
    return new MyPromise((res) => {
      res(v);
    });
  }

  static reject(v) {
    return new MyPromise((_, rej) => {
      rej(v);
    });
  }

  catch(e) {}
}

const p1 = new MyPromise((res, rej) => {
  res("p1 hello");
});

p1.then(
  (v) => {
    console.log(v);
  },
  (e) => {
    console.log(e);
  }
);

const p2 = new MyPromise((res, rej) => {
  rej("p1 rejected");
});

p2.then(
  (v) => {
    console.log(v);
  },
  (e) => {
    console.log(e);
  }
);

MyPromise.resolve("hello").then((v) => {
  console.log(v);
});

MyPromise.reject("error").then(
  (v) => {
    console.log(v);
  },
  (err) => {
    console.log(err);
  }
);
