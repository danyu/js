// please complete the implementation
class EventEmitter {
  constructor() {
    this.cbMap = {}; // {cbs: [], subs: Set()}
    this.subID = -1;
  }

  subscribe(eventName, callback) {
    this.subID++;

    if (!this.cbMap[eventName]) {
      this.cbMap[eventName] = {};
    }

    // Because eventName can be reused, so need
    // eventname + subID to uniquely indetify callback
    this.cbMap[eventName][this.subID] = callback;

    let _emitter = this;
    // return object with function to release
    return {
      release: () => delete _emitter.cbMap[eventName][_emitter.subID],
    };
  }

  emit(eventName, ...args) {
    if (!this.cbMap[eventName]) {
      console.log(eventName, "not a valid event name");
      return;
    }
    const subs = Object.keys(this.cbMap[eventName]);
    subs.forEach((sub) => this.cbMap[eventName][sub].apply(this, args));
  }
}

// test
