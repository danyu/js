function decodeURL(url) {
  try {
    let _url = url.replace(/-/g, '+').replace(/_/g, '/');
    while (_url.length % 4) {
      _url += '=';
    }
    return window.atob(_url);
  } catch (err) {
    return url;
  }
}

const str = '5Li55a6H';//丹宇

let str1 = decodeURL(str);
console.log(decodeURIComponent(escape(window.atob(str))));