const test1 = 1234564321
const test2 = 12321
const test3 = 2255522
const test4 = 566556
const test5 = 489984
const test6 = 56789

function isPalindrome(num){
    const revNum = num.toString().split('').reverse().join('')
    if (num === parseInt(revNum)) {
        return true
    } else {
        return false
    }
}


console.log(isPalindrome(test1))
console.log(isPalindrome(test2))
console.log(isPalindrome(test3))
console.log(isPalindrome(test4))
console.log(isPalindrome(test5))
console.log(isPalindrome(test6))