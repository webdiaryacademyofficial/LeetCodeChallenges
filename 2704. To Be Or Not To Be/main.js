var expect = function (val) {

    const message = (message)=> {
        throw new Error(message)
    }
    
    return {
        toBe: (number)=> {
            return val === number ? true : message("Not Equal")
        },
        notToBe: (number)=> {
            return val !== number ? true : message("Equal")
                
        }
    }
}

console.log(expect(5).toBe(5))
console.log(expect(5).notToBe(5))
