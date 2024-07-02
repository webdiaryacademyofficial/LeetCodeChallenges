
// let array = [
//   {"id":"1"},
//   {"id":"1"},
//   {"id":"2"}
// ],

// Output:
// {
//   "1": [{"id": "1"}, {"id": "1"}],
//   "2": [{"id": "2"}]
// }


// let array = [
//   [1, 2, 3],
//   [1, 3, 5],
//   [1, 5, 9]
// ]

// Output:
// {
//   "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
// }

Array.prototype.groupBy = function (fn) {
  let inputArray = [...this];
  let key;
  let result = {};

  for (let i = 0; i < inputArray.length; i++) {
    key = fn(inputArray[i]);

    if (result.hasOwnProperty(key)) {
      result[key].push(inputArray[i]);
    } else {
      result[key] = [inputArray[i]];
    }
  }

  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */


