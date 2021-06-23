import * as _ from "lodash";

// @ts-ignore
import Worker from "./worker/my.worker";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "Webpack"], " ");

  return element;
}

function link() {
  const lnk = document.createElement("a");
  lnk.innerText = "click";
  lnk.onclick = function () {
    const worker = new Worker();
    worker.postMessage({ a: 1 });
    worker.onmessage = (message: any) => {
      const { data } = message;
      console.log("from main thread: ", data);
    };
    // worker.addEventListener("message", (event) => {});
  };
  return lnk;
}

document.body.appendChild(component());
document.body.appendChild(link());
