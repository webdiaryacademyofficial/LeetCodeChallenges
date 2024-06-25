const obj = {
  a: {
    a1: 1,
    a2: 2,
    a3: 3,
  },
  b: {
    b1: 3,
    b2: 4,
    b3: 5,
    z: {
      z1: 0,
      z2: -1,
    },
  },
  c: 5,
  d: 6,
};

function flattenObj(obj, result = {}) {
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      flattenObj(value, result);
    } else {
      result[key] = value;
    }
  }

  return result;
}

console.log(flattenObj(obj));

// function flattenObj(obj, resultObj = {}) {
//   for (let i in obj) {
//     if (typeof obj[i] === "object") {
//       flattenObj(obj[i], resultObj);
//     } else {
//       resultObj[i] = obj[i];
//     }
//   }

//   return resultObj;
// }

// console.log(flattenObj(obj));

// function flattenObj(obj) {
//   let result = {};
//   for (let key in obj) {
//     if (typeof obj[key] == "object") {
//       result = Object.assign(result, flattenObj(obj[key]));
//     } else {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }

// console.log(flattenObj(obj));

// let resultObj = {};

// const flattenObj = (obj) => {
//   let primaryKeyObjects = {};

//   for (let pk in obj) {
//     primaryKeyObjects = obj[pk];

//     if (typeof primaryKeyObjects === "object") {
//       flattenObj(primaryKeyObjects);
//     } else {
//       resultObj[pk] = obj[pk];
//     }
//   }

//   return resultObj;
// };

// console.log(flattenObj(obj));
// Output : {a1:1, a2:2, a3:3, b1:3, b2:4, b3:5, z1:0 z2:-1, c:5, d:6}
