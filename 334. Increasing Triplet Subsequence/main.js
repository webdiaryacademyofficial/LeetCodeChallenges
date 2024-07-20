let numbers = [2, 1, 5, 0, 4, 2, 0, 16];

// Algorithm : Greedy Algorithm
const increasingTriplet = function (numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let number of numbers) {
    if (number <= smallest) {
      smallest = number;
    } else if (number <= secondSmallest) {
      secondSmallest = number;
    } else {
      return true;
    }
  }

  return false;
};

console.log(increasingTriplet(numbers));

//Smallest & Second smallest
// let numbers = [31, 14, 2, 13, 13, 41];

// Largest & Second largest
// let numbers = [1, 6, 5, 14, 27, 16, 13];

// Algorithm : Greedy Algorithm
// let numbers = [31, 14, 2, 13, 41]

// const findSmallestNumber = (numbers)=> {

//     let smallestNumber = Infinity

//     for(let number of numbers) {
//         if(number < smallestNumber) {
//             smallestNumber = number
//         }
//     }

//     return smallestNumber
// }

// console.log(findSmallestNumber(numbers))

// let numbers = [81, 14, 2, 13, 13, 41];
// const findLargestNumber = (numbers)=> {
//     let largestNumber = -Infinity

//     for(let number of numbers) {
//         if(number > largestNumber) {
//             largestNumber = number
//         }
//     }

//     return largestNumber
// }

// console.log(findLargestNumber(numbers))

// let numbers = [-20, 31, 14, 2, 13, -10, 41, 1];

// const findSecondSmallestNumber = (numbers)=> {
//     let smallestNumber = Infinity
//     let secondSmallestNumber = Infinity

//     for(let number of numbers) {
//         if(number < smallestNumber) {
//             secondSmallestNumber = smallestNumber
//             smallestNumber = number

//         } else if(number < secondSmallestNumber) {
//             secondSmallestNumber = number
//         }
//     }

//     console.log(smallestNumber)
//     console.log(secondSmallestNumber)

//     return secondSmallestNumber

// }

// console.log(findSecondSmallestNumber(numbers))

// let numbers =[1,2,3,4,5]
// Output: true

// let numbers = [5,4,3,2,1]
// Output: false

// let numbers = [1,1,1]
// Output: true

// Related questions
// let numbers = [1, 6, 5, 14, 27, 16, 13];  Largest & Second largest - Teach greedy with this input
// let numbers = [31, 14, 2, 13, 13, 41]; Smallest & Second smallest

// Infinity and -Infinity
// For lll these solution we use Greedy Algorithm

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
