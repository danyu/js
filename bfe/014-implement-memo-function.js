/**
 * const func = (arg1, arg2) => {
  return arg1 + arg2
}

const memoed = memo(func)

memoed(1, 2) 
// 3, func is called

memoed(1, 2) 
// 3 is returned right away without calling func

memoed(1, 3)
// 4, new arguments, so func is called
The arguments are arbitrary, so memo should accept an extra resolver parameter, which is used to generate the cache key, like what _.memoize() does.

const memoed = memo(func, () => 'samekey')

memoed(1, 2) 
// 3, func is called, 3 is cached with key 'samekey'

memoed(1, 2) 
// 3, since key is the same, 3 is returned without calling func

memoed(1, 3) 
// 3, since key is the same, 3 is returned without calling func
Default cache key could be just Array.from(arguments).join('_')

note

It is a trade-off of space for time, so if you use this in an interview, please do analyze how much space it might cost.
 */

function memo(func, resolver = (...args) => args.join("_")) {
  let map = {};

  return function wrapper(...args) {
    const key = resolver(...args);
    if (map[key] === undefined) map[key] = func(...args);
    return map[key];
  };
}

// ==== test
const func = function (a, b) {
  console.log(a, b, " called.");
  return a + b;
};
const memoed = memo(func, () => "samekey");

memoed(1, 2);
// 3, func is called, 3 is cached with key 'samekey'

memoed(1, 2);
// 3, since key is the same, 3 is returned without calling func

memoed(1, 3);

const memoed1 = memo(func);

memoed1(1, 2);
// 3, func is called, 3 is cached with key 'samekey'

memoed1(1, 2);
// 3, since key is the same, 3 is returned without calling func

memoed1(1, 3);
