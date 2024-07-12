// 1431. Kids With the Greatest Number of Candies


let candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]

const kidsWithCandies = function(candies, extraCandies) {
    let result = []
    let largeCandiesCount = Math.max(...candies)


    for(let candy of candies) {
      if(candy + extraCandies >= largeCandiesCount) {
        result.push(true)
      }else {
        result.push(false)
      }
    }

    return result

};


console.log(kidsWithCandies(candies, extraCandies))