// 238. Product of Array Except Self

let nums = [1, 2, 3, 4];
// Output: [24,12,8,6]

// let nums = [-1,1,0,-3,3]
// // Output: [0,0,9,0,0]

// let nums = [0,0]
// Output : [0,0]

var productExceptSelf = function (number) {
  let arrLength = number.length;
  let resultArr = [];
  let leftArr = new Array(arrLength);
  let rightArr = new Array(arrLength);

  // First pass
  leftArr[0] = 1;
  for (let i = 1; i < arrLength; i++) {
    leftArr[i] = leftArr[i - 1] * number[i - 1];
  }

  // Second pass
  rightArr[arrLength - 1] = 1;
  for (let i = arrLength - 2; i >= 0; i--) {
    rightArr[i] = rightArr[i + 1] * number[i + 1];
  }

  for (let i = 0; i < arrLength; i++) {
    let val = leftArr[i] * rightArr[i];
    resultArr.push(val);
  }

  return resultArr;
};

console.log(productExceptSelf(nums));
