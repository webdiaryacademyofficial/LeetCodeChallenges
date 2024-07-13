// 605. Can Place Flowers

// let flowerbed = [1, 0, 0, 0, 1], n = 1;
// Output: true

// let flowerbed = [1, 0, 0, 0, 1], n = 2;
// Output: false

// let flowerbed = [1,0,0,0,0,1], n = 2
// Output: false

// let flowerbed = [0, 0, 1, 0, 1], n = 1;
// Output: true

let flowerbed = [1,0,0,0,1,0,0], n = 2
// Output: true

const canPlaceFlowers = function (flowerbed, n) {
  let isEmpty = 0; // means empty
  if (n === 0) return true;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      (flowerbed[i] === isEmpty) &&
      (i === 0 || flowerbed[i-1] === isEmpty) &&
      (i === flowerbed.length - 1 || flowerbed[i+1] === isEmpty)
    ){
      flowerbed[i] = 1;
      n = n - 1;
      if (n <= 0) return true;
    }
  }

  return false;
};

console.log(canPlaceFlowers(flowerbed, n));
