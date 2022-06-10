const test1 = [1,2,2,2,3,5,6,7,8]
const test2 = [1,1,2,2,3,3,6,6,8]
const test3 = [1,1,1,1,2,2,2,2,2]
const test4 = [1,2,3,4,5,6,7,8,9]
const test5 = [1,1,2,2,3,5,5,5,6]
const test6 = [1,1,2]

// var removeDuplicates = function(nums) {
//     const deduppedArray = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== nums[i + 1]) {
//            deduppedArray.push(nums[i]) 
//         }
//     }
//     return deduppedArray
// }

var removeDuplicates2 = function(nums) {
    console.log(nums)
    const aLength = nums.length
    let original = nums[0]
    let ind = 1
    for (let i = 1; i < aLength; i++) {
        if (nums[i] !== original) {
            original = nums[i]
           nums[ind] = nums[i];
            ind++
        }
    }
    console.log(ind)
    return ind
}

console.log(removeDuplicates2(test1))
console.log(removeDuplicates2(test2))
console.log(removeDuplicates2(test3))
console.log(removeDuplicates2(test4))
console.log(removeDuplicates2(test5))
console.log(removeDuplicates2(test6))