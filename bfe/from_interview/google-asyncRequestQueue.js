async function mockRequest(url, requestTime, callback) {
  console.log(url + " is being requested");

  await Promise.resolve((res, rej) => {
    setTimeout(requestTime);
  }).then(() => callback());
}

function makeEnqueue() {
  const queue = [];

  return function (url, requestTime, callback) {
    console.log(queue);

    function recur() {
      if (!queue.length) return;
      const [url, requestTime, callback] = queue.shift();

      // mock request
      mockRequest(url, requestTime, () => {
        callback();
        recur();
      });
    }

    queue.push([url, requestTime, callback]);
    if (queue.length == 1) recur(); // start recur
  };
}

const enqueue = makeEnqueue();

// const timeToWait = [500, 100, 200];
const requests = [
  [
    "url 1",
    500,
    () => {
      console.log(" url 1");
    },
  ],
  [
    "url 2",
    100,
    () => {
      console.log(" url 2");
    },
  ],
  [
    "url 3",
    200,
    () => {
      console.log(" url 3");
    },
  ],
];

requests.forEach(([url, time, callback]) => enqueue(url, time, callback));
// [
//   () => setTimeout(() => console.log(1), 500),
//   () => setTimeout(() => console.log(2), 200),
// ].forEach((func) => queueMicrotask(() => func()));
