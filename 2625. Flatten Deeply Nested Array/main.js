// n = 0
// Output
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// n = 1
// Output
// [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

// n = 2
// Output
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 2;
let flattened = [];

const flat = function (arr, n) {
  arr.forEach((element) => {
    if (Array.isArray(element) && n > 0) {
      // Means: Found an inner array.
      // Now what, think twice before you write next line.
      // Ah okay, I need to flatten the array.
      // Let me flatten.
      // Wait wait, the element which I got is array of array [7, 8, [9, 10, 11], 12], shit
      // I got the idea, let me use the recurssion here
      flat(element, n - 1);
    } else {
      // Means: The element is a number, dont think twice, push it
      flattened.push(element);
    }
  });

  return flattened;
};

console.log(flat(arr, n));
