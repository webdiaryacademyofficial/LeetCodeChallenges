const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

// Algorithm used : Hash map-based merge or dictionary-based merge
var join = function (arr1, arr2) {
  let resultObj = {};
  let finalArray = [];

  // First pass: Populate resultObj with arr1 elements
  for (let i = 0; i < arr1.length; i++) {
    let key = arr1[i]["id"];
    resultObj[key] = arr1[i];
  }

  // Second pass: Update or add arr2 elements to resultObj
  for (let j = 0; j < arr2.length; j++) {
    if (resultObj.hasOwnProperty(arr2[j]["id"])) {
      resultObj[arr2[j]["id"]] = { ...resultObj[arr2[j]["id"]], ...arr2[j] };
    } else {
      resultObj[arr2[j]["id"]] = arr2[j];
    }
  }

  finalArray = Object.values(resultObj);

  return finalArray;
};

const joinedArr = join(arr1, arr2);
console.log(joinedArr);

// Short code answer
// ---------------------------------------------------------------------
// const join = () => {
//   let joinedObj = {};
//   let finalArr = [];

//   arr1.forEach((item) => (joinedObj[item.id] = { ...item }));
//   arr2.forEach(
//     (item) => (joinedObj[item.id] = { ...joinedObj[item.id], ...item })
//   );

//   finalArr = Object.values(joinedObj);
//   return finalArr;
// };
