// 1679. Max Number of K-Sum Pairs

// let nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.
// Example 2:

// let nums = [3,1,3,4,3], k = 6
// Output: 1
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.

// let nums = [1, 2, 3, 4], k = 5;
// let nums = [3,1,3,4,3], k = 6
let nums = [4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], k = 2
// let nums = [
//     63, 10, 28, 31, 90, 53, 75, 77, 72, 47, 45, 6, 49, 13, 77, 61, 68, 43, 33, 1, 14, 62, 55, 55,
//     38, 54, 8, 79, 89, 14, 50, 68, 85, 12, 42, 57, 4, 67, 75, 6, 71, 8, 61, 26, 11, 20, 22, 3, 70,
//     52, 82, 70, 67, 18, 66, 79, 84, 51, 78, 23, 19, 84, 46, 61, 63, 73, 80, 61, 15, 12, 58, 3, 21,
//     66, 42, 55, 7, 58, 85, 60, 23, 69, 41, 61, 35, 64, 58, 84, 61, 77, 45, 14, 1, 38, 4, 8, 42, 16,
//     79, 60, 80, 39, 67, 10, 24, 15, 6, 37, 68, 76, 30, 53, 63, 87, 11, 71, 86, 82, 77, 76, 37, 21,
//     85, 7, 75, 83, 80, 8, 19, 25, 11, 10, 41, 66, 70, 14, 23, 74, 33, 76, 35, 89, 68, 85, 83, 57, 6,
//     72, 34, 21, 57, 72, 79, 29, 65, 3, 67, 8, 24, 24, 18, 26, 27, 68, 78, 64, 57, 55, 68, 28, 9, 11,
//     38, 45, 61, 37, 81, 89, 38, 43, 45, 26, 84, 62, 22, 37, 51, 15, 30, 67, 75, 24, 66, 40, 81, 74,
//     48, 43, 78, 14, 33, 19, 73, 5, 1, 2, 53, 29, 49, 73, 23, 5,
//   ],
//   k = 59;

//===========================================
// Technique used : Two pointers approach
//===========================================
let maxOperations = function (nums, k) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let numsOfOperation = 0;
  nums.sort((a, b) => a - b);
  console.log(nums)

  while (leftIndex < rightIndex) {
    const sum = nums[leftIndex] + nums[rightIndex];
    if (sum === k) {
      numsOfOperation++;
      leftIndex++;
      rightIndex--;
    } else if (sum < k) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
  return numsOfOperation;
};

console.log(maxOperations(nums, k));













// let nums = [1,1,3,4,3], k = 6
// let nums = [4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], k = 2

// Technique used : Two pointers approach
// First approach
// let maxOperations = function (nums, k) {
//   let numsOfOperation = 0;
//   let tryAgain = Boolean
//   let newNumbers = nums.filter(num => k !== num &&  k > num)

//   do {
//     tryAgain = false
//     for(let i = 0; i < newNumbers.length; i++) {
//       for (let j = 1; j < newNumbers.length; j++) {
//         if (newNumbers[i] + newNumbers[j] === k) {
//           console.log(newNumbers[i] , newNumbers[j])
//           numsOfOperation++;
//           newNumbers.splice(i, 1);
//           newNumbers.splice(j, 1);
//           console.log(newNumbers)
//           tryAgain = true
//           break
//         }
//       }
//     }
//   }while(tryAgain)

//   console.log(numsOfOperation);
// };

// console.log(maxOperations(nums, k));