var map = function (arr, fn) {
  let resultArr = [];

  for (let [i, item] of arr.entries()) {
    resultArr.push(fn(arr[i], i));
  }

  return resultArr;
};

const arr = [1, 2, 3],
  fn = function plusone(n) {
    return n + 1;
  };
const result = map(arr, fn);
// Output: [2,3,4]
