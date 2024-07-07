let numbers = [2,1,5,0,4,2,0,16]


const increasingTriplet = function (numbers) {
    let smallest = Infinity
    let secondSmallest = Infinity

    for(let number of numbers) {
        if(number <= smallest) {
            smallest = number
        }else if(number <= secondSmallest) {
            secondSmallest = number
        }else {
            return true
        }
    }

    return false

};

console.log(increasingTriplet(numbers))
