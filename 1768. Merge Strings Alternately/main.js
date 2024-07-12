//1768. Merge Strings Alternately

let word1 = 'abcd';
let word2 = 'pq';
// Output: "apbqcd"

const mergeAlternately = function (word1, word2) {
  let w1 = 0;
  let w2 = 0;
  let result = [];


  while (w1+w2 < word1.length + word2.length) {
    if(word1[w1]) {
      result.push(word1[w1])
      w1++
    }

    if(word2[w2]) {
      result.push(word2[w2])
      w2++
    }
  }


  return result.join('')
};

console.log(mergeAlternately(word1, word2));
