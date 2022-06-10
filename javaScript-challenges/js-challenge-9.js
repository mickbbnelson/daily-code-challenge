// Merge two ordered lists and create another ordered list

const test1 = [1,2,4,5]
const test2 = [1,2,3,4,5,6]
const test3 = [2,2,3,4]
const test4 = [1,3,4,4]
const test5 = [3,4,5,6]
const test6 = [2,2,4,4]
const test7 = []
const test8 = []
const test9 = [0]
const test10 = []
const test11 = [1,2,4]
const test12 = [1,3,4]

class ListNode {
    constructor(val) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
}}


function mergeTwoLists(list1, list2) {
    let combinedList = new ListNode(-1);
    let current = combinedList
    while(list1 || list2) {
        if(list2 === null || (list1 !== null && list1.val <= list2.val)){
            combinedList.next = list1;
            combinedList = combinedList.next;
            list1 = list1.next
        } else {
            combinedList.next = list2;
            combinedList = combinedList.next;
            list2 = list2.next
        }
    }
    return current.next
}



// console.log(mergeTwoLists(test1, test2))
// console.log(mergeTwoLists(test2, test3))
// console.log(mergeTwoLists(test3, test4))
// console.log(mergeTwoLists(test4, test5))
// console.log(mergeTwoLists(test5, test6))
// console.log(mergeTwoLists(test1, test6))
// console.log(mergeTwoLists(test1, test6))
// console.log(mergeTwoLists(test7, test8))
console.log(mergeTwoLists(test11, test12))