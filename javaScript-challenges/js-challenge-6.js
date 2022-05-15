// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
testArray1 = [1,2,3,4,5]
testArray2 = [2,0,6,7]
testArray3 = [1,2,5,6]

testTarget1 = 5
testTarget2 = 2
testTarget3 = 7

function sumFilter(newArray, number, sum){
    for (let i = 0; i < newArray.length; i++)
        if (newArray[i] + number === sum) {
            return i
        }
}

function twoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        const newArray = array.slice(i)
        const newNumber = sumFilter(newArray, array[i], target)
            return [i, newNumber]
    }
}

console.log(twoSum(testArray1, testTarget1))
console.log(twoSum(testArray2, testTarget2))
console.log(twoSum(testArray3, testTarget3))
