let number = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  k = 2;
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]

// let number = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]

const longestOnes = function (number, k) {
  let leftIndex = 0;
  let zeroCount = 0;
  let maxCount = 0;

  for (let i = 0; i < number.length; i++) {
    if (number[i] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (number[leftIndex] === 0) {
        zeroCount--;
      }
      leftIndex++;
    }

    maxCount = Math.max(zeroCount, maxCount);
  }
  return maxCount;
};

console.log(longestOnes(number, k));

// First approach
// const longestOnes = function (number, k) {
//   let longestOnesCount = 0;
//   let windowCount = 0;
//   let count = k

//   // Create window
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] === 1) {
//       windowCount++;
//     }

//     if (number[i] === 0) {
//       if (count > 0) {
//         windowCount++;
//         count--;
//       }else {
//         break
//       }
//     }
//     longestOnesCount = Math.max(windowCount, longestOnesCount);
//   }
//   console.log(longestOnesCount);

//   // [1, 1, 0, 0, | 0, 0, 1, 1, 1, 1, 0]

//   // Slide window
//   count = k
//   for(let i = longestOnesCount; i < number.length; i++) {
//     if(number[i] === 0) {
//       if (count > 0) {
//         windowCount++;
//         count--;
//       }else{
//         count = k
//         longestOnesCount = Math.max(windowCount, longestOnesCount);
//       }
//     } else if(number[i] === 1) {
//       windowCount++
//     }

//   }

//   console.log(longestOnesCount)

// };

// console.log(longestOnes(number, k));






















// let number = [1,1,0,0,0,0,1,1,1,1,0], k = 2
// // Output: 6
// // Explanation: [1,1,1,0,0,1,1,1,1,1,1]

// // let number = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// // Output: 10
// // Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]


// const longestOnes = function(number, k) {
//   let longestOnesCount = 0
//   let windowCount = 0

//   // Create a window
//   for(let i=0; i<k; i++) {
//     if(number[i] === 1) {
//       windowCount++
//     }
//   }
//   console.log(windowCount)
//   longestOnesCount = windowCount

//   // [1,1,0,0,0,0,1,1,1,1,0], k = 2

//   // Slide window
//   for(let i=k; i<number.length; i++) {
//     if(k > 0) {
//       if(number[i] === 0 || number[i] === 1) {
//         windowCount++
//         k--
//       }
//     }

//     longestOnesCount = Math.max(windowCount, longestOnesCount)

//     if(k === 0) {
//       k++
//       windowCount--
//     }
//   }

//   console.log(longestOnesCount)


// };


// console.log(longestOnes(number, k))