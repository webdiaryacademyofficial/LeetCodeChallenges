function memoize(fn) {
  let results = {};

  return function (...args) {
    let key = JSON.stringify(args);

    if (results.hasOwnProperty(key)) {
      return results[key];
    } else {
      return (results[key] = fn(...args));
    }
  };
}

let callCount = 0;
let sum = function (a, b) {
  callCount += 1;
  return a + b;
};

const memoizedFn = memoize(sum);
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(4, 8)); // 12
console.log(memoizedFn(2, 3)); // 5
console.log(callCount, "memoizedFn fun exectuted"); //2
