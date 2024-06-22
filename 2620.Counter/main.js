var createCounter = function(n) {

    return function () {
        return n++
    };
};

const num = 10
const counter = createCounter(num)
console.log(counter())
console.log(counter())
console.log(counter())