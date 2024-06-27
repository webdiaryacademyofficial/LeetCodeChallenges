const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

var join = function (arr1, arr2) {
  let resultObj = {};
  let finalArray = [];
  for (let i = 0; i < arr1.length; i++) {
    let key = arr1[i]["id"];
    resultObj[key] = arr1[i];
  }

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
