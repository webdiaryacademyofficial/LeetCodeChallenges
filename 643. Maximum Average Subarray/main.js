// 643. Maximum Average Subarray

// let number = [5], k = 1
// Output: 5.00000

// let number = [4, 0, 4, 3, 3],
//   k = 5;
// Output: 2.8

// let number = [7, 4, 5, 8, 8, 3, 9, 8, 7, 6],
//   k = 7;

// let number = [1, 12, -5, -6, 50, 3],
//   k = 4;
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

//=================================================================
// Pattern used : Sliding Window
//=================================================================

const findMaxAverage = function (number, k) {
  let windowSum = 0;
  let maxAvg = 0;

  // Create initial window
  for (let i = 0; i < k; i++) {
    windowSum += number[i];
  }

  maxAvg = windowSum / k;

  // Slide window to find max average
  for (let i = k; i < number.length; i++) {
    windowSum = windowSum - number[i - k] + number[i];
    const slideWindowAvg = windowSum / k;

    if (slideWindowAvg > maxAvg) {
      maxAvg = slideWindowAvg;
    }
  }

  return maxAvg;
};

console.log(findMaxAverage(number, k));

// First approach
// const findMaxAverage = function (number, k) {
//   let result = []

//   // First create a window
//   for (let i = 0; i <= number.length - k; i++) {
//     let maxAvg = -Infinity;
//     let windowSum = 0;
//     let avg = 0;

//     for (let j = i; j < k+i; j++) {
//       windowSum += number[j];
//       avg = windowSum / k;
//     }

//     maxAvg = avg;
//     result.push(maxAvg)
//   }

//   return Math.max(...result)
// };

// console.log(findMaxAverage(number, k));
