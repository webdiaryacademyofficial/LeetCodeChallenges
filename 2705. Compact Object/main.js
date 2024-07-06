// let obj = [null, 0, 5, [0], [false, 16]];
// Output: [5, [], [16]]

let obj = { a: null, b: [false, 1] };

// Output: {"b": [1]}

// let obj = [0, 1, 0, [[[null, 0], false], false], false];
// Output: [1,[[[]]]]

var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    const recRes = obj.map((element) => compactObject(element));
    const filtered = recRes.filter((item) => Boolean(item));
    return filtered;
  } else if (typeof obj === "object" && obj !== null) {
    const result = {};
    for (let key in obj) {
      const recRes = compactObject(obj[key]);
      if (Boolean(recRes)) {
        result[key] = recRes;
      }
    }
    return result;
  } else {
    return obj;
  }
};

console.log(compactObject(obj));

const obj1 = null;
if (obj1 !== null) {
  console.log(true);
}

const age = null;
console.log(typeof age);
