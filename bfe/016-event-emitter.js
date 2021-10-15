// please complete the implementation
class EventEmitter_1 {
  constructor() {
    this.cbMap = {};
  }

  subscribe(eventName, callback) {
    if (!this.cbMap[eventName]) {
      this.cbMap[eventName] = new Map();
    }
    const id = Symbol();
    this.cbMap[eventName].set(id, callback);

    //(1) release as regular function
    // let _emitter = this;
    // return {
    //   release() {
    //     _emitter.cbMap[eventName].delete(id);
    //   },
    // };
    // (2) release as arrow function
    return {
      release: () => this.cbMap[eventName].delete(id),
    };
  }

  emit(eventName, ...args) {
    console.log(this.cbMap[eventName]);
    if (!this.cbMap[eventName] || !this.cbMap[eventName].size) {
      console.log("No event subscribers");
      return;
    }

    for (let cb of this.cbMap[eventName].values()) cb.apply(this, args);
  }
}

class EventEmitter_2 {
  constructor() {
    this.cbMap = {};
  }

  subscribe(eventName, callback) {
    if (!this.cbMap[eventName]) {
      this.cbMap[eventName] = new Map();
    }
    // const id = Symbol();
    this.cbMap[eventName].set(callback, callback);

    return {
      release: () => this.cbMap[eventName].delete(callback),
    };
  }

  emit(eventName, ...args) {
    if (!this.cbMap[eventName]) {
      return;
    }
    // console.log(this.cbMap);
    for (let [k, cb] of this.cbMap[eventName].entries()) cb.apply(this, args);
  }
}

// test
const emitter = new EventEmitter_1();
const callback1 = () => {
  console.log("Callback1 is called.");
};
const sub = emitter.subscribe("event1", callback1);
const sub_1 = emitter.subscribe("event1", callback1);
emitter.emit("event1");
sub.release("event1");
emitter.emit("event1");

// const emitter2 = new EventEmitter_2();
// const callback2 = () => console.log("Callback2 is called.");

// const callback3 = () => console.log("Callback3 is called.");

// const sub2 = emitter2.subscribe("event2", callback2);
// const sub2_1 = emitter2.subscribe("event2", callback2);
// const sub3 = emitter2.subscribe("event2", callback3);
// emitter2.emit("event2");
// sub2.release("event2");
// emitter2.emit("event2");
