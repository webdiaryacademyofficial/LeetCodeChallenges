// 392. Is Subsequence

// let s = "axc", t = "ahbgdc"
// Output: false

// let s = "acb", t ="ahbgdc"
// Output: false

// let s = "b", t = "c"
// Output: false

// let s ="", t ="ahbgdc"
// Output: true

// let s = "aaaaaa" , t = "bbaaaa"
// Output: false

// let s = "ab" , t = "baab"
// Output: true

// let s = "abc", t = "lahbgdc"
// Output: true

//********************************** */
// Technique used is : Two pointers
//********************************** */
const isSubsequence = function(s, t) {
  let sIndex = 0
  let tIndex = 0

  let result = []
  let i = 0

  if (s == "") return true

  while(i < t.length) {

    if(s[sIndex] === t[tIndex]) {
      result.push(s[sIndex])
      sIndex++
      tIndex++

    }else {
      tIndex++
    }

    i++
  }

  if(s===result.join('')) return true

  return false


};

console.log(isSubsequence(s,t))


// First Approach
// const isSubsequence = function(s, t) {
//     const tArr = t.split('')
//     const sArr = s.split('')
//     const rArr = []

//     if(s == "") return true

//     for(let letter of tArr) {
//       if(sArr.includes(letter)) {
//         rArr.push(letter)
//       }
//     }
//     console.log(sArr)
//     console.log(rArr)
//     let count = 0
//     let i = 0
//     while(i < rArr.length) {
//       if(rArr.includes(sArr[i])) {
//         count = count + 1
//       }
//       i++
//     }
//     console.log(count)

//     if(rArr.length !== 0 && count === sArr.length) return true

//     return false
// };

// console.log(isSubsequence(s,t))



