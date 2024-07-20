// 11. Container With Most Water

let height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// let height = [1, 8, 6, 2, 5, 4, 8, 3, 0]
// Output: 40
// let height = [1,1]
// Output: 1

// area = min(height[left], height[right]) * (right - left)

// Pattern used : Two pointers
// First approach
const maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let area = 1
  let maxArea = []

  for(let j=0; j<height.length; j++) {
    if(height[left] < height[right]){
      area = Math.min(height[left], height[right]) * (right-left)
      left++
      maxArea.push(area)
    }else {
      area = Math.min(height[left], height[right]) * (right-left)
      right--
      maxArea.push(area)
    }
  }

  const largeArea = maxArea.sort((a,b)=> b-a)
  return largeArea[0]
};

console.log(maxArea(height));


