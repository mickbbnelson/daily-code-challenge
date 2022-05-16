// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
testArray1 = [1,2,2,3,5]
testArray2 = [0,1,1,7]
testArray3 = [1,2,5,7]

testTarget1 = 5
testTarget2 = 2
testTarget3 = 6

function sumFilter(newArray, number, sum){
    for (let i = 0; i < newArray.length; i++)
        if (newArray[i] + number === sum) {
            return [newArray[i], i]
        }
}

function twoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        const newArray = array.slice(i)
        // const newNumber = sumFilter(newArray, array[i], target)
        const testNumber = array[i]
        let secondNumber = ""
        let secondIndex = ""
        for (let i = 0; i < newArray.length; i++)
            if (newArray[i] + testNumber === target) {
                secondNumber = newArray[i]
                secondIndex = i + 1
            }
            if (i === 0 && array[i] + secondNumber === target) {
                return [i, secondIndex - 1]
            } else if (array[i] + secondNumber === target) {
                return [i, secondIndex]  
            }
    }
}

console.log(twoSum(testArray1, testTarget1))
console.log(twoSum(testArray2, testTarget2))
console.log(twoSum(testArray3, testTarget3))
