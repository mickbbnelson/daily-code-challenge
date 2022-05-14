//  Create a solution that generates an integer when a roman numeral is given.
const letterTest = "I"
const test1 = "III"
const test2 = "LVIII"
const test3 = "MCMXCIV"


function letterValue(romanString){
    const splitString = romanString.split("")
    numArray = splitString.map(letter => {
    if (letter === "I") {
        return 1
    } else if (letter === "V") {
        return 5
    } else if (letter === "X") {
        return 10
    } else if (letter === "L") {
        return 50
    } else if (letter === "C") {
        return 100
    } else if (letter === "D") {
        return 500
    } else if (letter === "M") {
        return 1000
    }
    })
    return numArray
}

function returnNumber(numArray) {
    total = 0;

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < numArray[i + 1]) {
            total -= numArray[i]
        } else {
            total += numArray[i]
        }
    }
    return total
}

function romanToInt(romanString) {
    numArray = letterValue(romanString)
    return returnNumber(numArray)
}

console.log(romanToInt(test3))


