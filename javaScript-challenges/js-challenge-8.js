//Write a function to find the longest common prefix amongst and array of strings

// Figure out a way to test for original array length and then loop through again

// Idea:  Loop through the original array, creating array1, array2 etc varaibles to make sure there are no empty values

const test1 = ['tomb', 'tomorrow', 'tommy']
const test2 = ['yall', 'be', 'trippin']
const test3 = ['mall', 'mallard', 'mallway']
const test4 = ['twins', 'twelve', 'twenty']
const test5 = ['yooo', 'yoooo', 'yooooo']
const test6 = ['', 'do', 'doo']
const test7 = ['abe', 'about']
const test8 = ['batman', 'batter', 'battle', 'bat']

function longestCommonPrefix(array) {
    // const array1 = array[0] ? array[0].split('') : [""];
    // const array2 = array[1] ? array[1].split('') : [""];
    // const array3 = array[2] ? array[2].split('') : [""];
    // let array1 = []
    // let array2 = []
    // let array3 = []
    // for (let i = 0; i < array.length; i++) {
    //     eval(`array${i + 1} = array[${i}]`)
    // }
    // // const lengthFinder = () => {
    // //     if (array1.length < array2.length && array1.length < array3.length) {
    // //         return array1.length
    // //     } else if (array2.length < array1.length && array2.length < array3.length) {
    // //         return array1.length
    // //     } else {
    // //         return array1.length
    // //     }
    // // }
    // const finalArray = []
    // for (let i = 0; i < array1.length; i++) {
    //     if (array1[i] === array2[i] && array1[i] === array3[i]) {
    //         finalArray.push(array1[i])
    //     } 
    // }
    // return finalArray.join('')
    if (!array.length) return '';
    let targetString = '';
    for (let i = 0; i < array[0].length; i++) {       
        for (let s = 1; s < array.length; s++) {
            if (array[0][i] !== array[s][i]) return targetString
        }
        targetString = targetString + array[0][i]
    }
    return targetString
};

console.log(longestCommonPrefix(test1))
console.log(longestCommonPrefix(test2))
console.log(longestCommonPrefix(test3))
console.log(longestCommonPrefix(test4))
console.log(longestCommonPrefix(test5))
console.log(longestCommonPrefix(test6))
console.log(longestCommonPrefix(test7))
console.log(longestCommonPrefix(test8))






// if (`${array1[0]}${array1[1]}${array1[2]}` === `${array2[0]}${array2[1]}${array2[2]}` && `${array1[0]}${array1[1]}${array1[2]}` === `${array3[0]}${array3[1]}${array3[2]}`) {
//     return `${array1[0]}${array1[1]}${array1[2]}`
// }
// else if (`${array1[0]}${array1[1]}${array1[2]}` === `${array2[0]}${array2[1]}${array2[2]}` && `${array1[0]}${array1[1]}${array1[2]}` === `${array3[0]}${array3[1]}${array3[2]}`) {
//     return `${array1[0]}${array1[1]}${array1[2]}`
// }
// else if (`${array1[0]}${array1[1]}` === `${array2[0]}${array2[1]}` && `${array1[0]}${array1[1]}` === `${array3[0]}${array3[1]}`) {
//     return `${array1[0]}${array1[1]}`
// }
// else if (array1[0] === array2[0] && array1[0] === array3[0]) {
//     return `${array1[0]}`
// } else {
//     return ""
// }