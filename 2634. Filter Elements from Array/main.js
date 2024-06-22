var filter = function (arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i) && newArr.push(arr[i]);
  }

  return newArr;
};

const arr = [0, 10, 20, 30],
  fn = function greaterThan10(n) {
    return n > 10;
  };
filter(arr, fn);
// Output: [20, 30];
