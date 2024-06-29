let arr = [1, 2, [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 1;

let flattened = [];

const flat = function (arr, n) {
  arr.forEach((item) => {
    if (Array.isArray(item) && n > 0) {
      flat(item, n - 1);
    } else {
      flattened.push(item);
    }
  });

  return flattened;
};

console.log(flat(arr, n));
