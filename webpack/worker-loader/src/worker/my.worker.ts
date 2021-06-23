const ctx: Worker = self as any;

// Post data to parent thread
ctx.postMessage({ foo: "foo" });

// Respond to message from parent thread
ctx.addEventListener("message", ({ data }) =>
  console.log("from main thread: ", data)
);
