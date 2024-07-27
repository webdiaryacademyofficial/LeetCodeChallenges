// 1456. Maximum Number of Vowels in a Substring of Given Length

let s = 'aciiidef',
  k = 3;
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// let s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// let s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

// let s = "novowels", k=1
// Output: 1

// let s = "pdzndkhhoujpqyex", k = 5
// Output: 2

//=================================================================
// Pattern used : Sliding Window
//=================================================================

const maxVowels = function (s, k) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;
  let maxVowelsCount = 0;

  // Create sliding window
  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      vowelsCount++;
    }
  }

  maxVowelsCount = vowelsCount;

  // Adjust sliding window
  for (let i = k; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsCount++;
    }
    if (vowels.includes(s[i - k])) {
      vowelsCount--;
    }

    maxVowelsCount = Math.max(vowelsCount, maxVowelsCount);
  }

  return maxVowelsCount;
};

console.log(maxVowels(s, k));
