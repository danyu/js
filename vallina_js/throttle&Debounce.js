function debounce(func, delay) {
  // console.log('create debounce');
  var timeout;

  return function (...args) {
    var _this = this;
    console.log('this =>', this);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log('this inside setTimeout => ', this);
      func.apply(_this, args);
      // func(args);
      timeout = null;
    }, delay);
  }
}

function throttle(func, limit) {
  // console.log('create throttle');
  var timeout;
  // var isThrottling;
  return function (...args) {

    if (!timeout) {
      // isThrottling = true;
      func(...args);
      timeout = setTimeout(() => {
        clearTimeout(timeout);
        timeout = null;
        isThrottling = false;
      }, limit)
    }
  }
}

const onClickDebounced = debounce((e) => {
  console.log('this [onClickDebounced]', this);
  console.log(e.target.id, ' clicked');
}, 1000);


const onClickThrottle = throttle((e) => {
  console.log(e.target.id, ' clicked');
}, 1000);

document
  .querySelector('#debounce_btn')
  .addEventListener('click', onClickDebounced);

document
  .querySelector('#throttle_btn')
  .addEventListener('click', onClickThrottle);

debounce(() => { console.log('hi') }, 1000)();