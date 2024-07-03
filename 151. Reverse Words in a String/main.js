// 151. Reverse Words in a String
let s = "  the sky is   blue  ";
// Output: "blue is sky the"

// let s = "a good   example"
// Output: "example good a"
var reverseWords = function (s) {
  return s
    .split(" ")
    .reverse()
    .filter((s) => s !== "")
    .join(" ");
};

console.log(reverseWords(s));
