let nums = [1,1,3,4,3], k = 6
// let nums = [4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], k = 2

// Technique used : Two pointers approach
let maxOperations = function (nums, k) {
  let numsOfOperation = 0;
  let tryAgain = Boolean
  let newNumbers = nums.filter(num => k !== num &&  k > num)

  do {
    tryAgain = false
    for(let i = 0; i < newNumbers.length; i++) {
      for (let j = 1; j < newNumbers.length; j++) {
        if (newNumbers[i] + newNumbers[j] === k) {
          console.log(newNumbers[i] , newNumbers[j])
          numsOfOperation++;
          newNumbers.splice(i, 1);
          newNumbers.splice(j, 1);
          console.log(newNumbers)
          tryAgain = true
          break
        }
      }
    }
  }while(tryAgain)

  console.log(numsOfOperation);
};

console.log(maxOperations(nums, k));