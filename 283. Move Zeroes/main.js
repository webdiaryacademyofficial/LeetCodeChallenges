// Bubble Sort Algorithm
// Time Complexity : Big O(n^2) Which is bad
let nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

const moveZeroes = function(nums) {
    let numsLength = nums.length

    while(0 < numsLength) {
      for(let i=0; i<numsLength -1; i++) {
        if(nums[i] === 0){
          let temp = nums[i+1]
          nums[i+1] = 0
          nums[i] = temp
        }
      }

      numsLength--
    }

    return nums

};

console.log(moveZeroes(nums))