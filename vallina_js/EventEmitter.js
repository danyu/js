class EventEmitter {

  constructor() {
    this.events = {};
  }

  on(eventName, cb) {
    if (this.events[eventName]) {
      this.events[eventName].push(cb);
    } else {
      this.events[eventName] = [cb];

    }
  }

  trigger(eventName, ...arg) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(cb => {
        cb.apply(arg);
      })
    }
  }

  off(eventName) {

  }
}

// test
let eE = new EventEmitter();
eE.on('change', () => { console.log('hi') });
eE.on('change', () => { console.log('there') });
eE.trigger('change');