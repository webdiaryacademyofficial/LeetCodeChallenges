// let numbers = [1,2,3,4,5]
// Output: true
// let numbers =  [2,1,5,0,4,6]
// Output: true
let numbers = [5, 4, 3, 2, 1];
// Output: false

// let numbers = [8, 6, 1, 5, 0, 4, 7] //true
// Output: false
// let numbers = [2,4,-2,-3]
// Output: false

// let numbers = [1, 2, 3, 4, 5]; //true

var increasingTriplet = function (numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (num of numbers) {
    if (num <= smallest) {
      smallest = num; //
    } else if (num <= secondSmallest) {
      secondSmallest = num; //
    } else {
      return true;
    }
  }

  return false;
};

console.log(increasingTriplet(numbers));

// Related questions
// Infinity and -Infinity
// 1. Finding the Minimum Value in an Array
// let nums = [34, 12, 45, 2, 18];
// Output: 2

// 2. Finding the Second Smallest Value
// Output: 12

// 3. Finding the Maximum Value in an Array
// let nums = [34, 12, 45, 2, 18];
// Output: 45

// 4. Finding the Second Largest Value
// let nums = [34, 12, 45, 2, 18];
// Output: 34

// 5. Dynamic Programming: Minimum Path Sum
// let grid = [
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1]
// ];
// Output: 7

// 6. Shortest Path in Graph (Dijkstra’s Algorithm)
// let graph = {
//     A: { B: 1, C: 4 },
//     B: { A: 1, C: 2, D: 5 },
//     C: { A: 4, B: 2, D: 1 },
//     D: { B: 5, C: 1 }
// };
// Output: { A: 0, B: 1, C: 3, D: 4 }
