const obj1 = {
    name: "Mick Nelson",
    class: "VI",
    age: 35
}

const obj2 = {
    name: "Shan Goose",
    class: "VI",
    age: 34
}

//Write a JavaScript program to list the properties of a JavaScript object.
const propList = (obj) => {
    return Object.keys(obj).join(',')
}

// console.log(propList(obj1))
// console.log(propList(obj2))

//Write a JavaScript program to delete the age property from the following object. Also print the object before or after deleting the property.
const deleteAge = (obj) => {
    console.log(obj)
    delete obj.age
    console.log(obj)
}

// console.log(deleteAge(obj1))

//Write a JavaScript program to get the length of a JavaScript object.
const lengthFinder = (obj) => {
    return Object.keys(obj).length
}

// console.log(lengthFinder(obj1))

const lengthFinder2 = (obj) => {
    var obSize = 0;
    for (key in obj) {
        obSize++
    }
    return obSize
}

// console.log(lengthFinder2(obj2))


// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

const bookDisplay = (books) => {
    const booksDisp = books.map((book) => {
        return `Title: ${book.title}, Author: ${book.author}, Have Read?: ${book.readingStatus}`
    })
    return booksDisp
}

// console.log(bookDisplay(library))

//Print whether each book has been read or not
const readStatus = (books) => {
    books.map(book => {
        if (book.readingStatus === true) {
            console.log(`I've read ${book.title}`)
        } else {
            console.log(`I've not read ${book.title}`)
        }
    })
}

// console.log(readStatus(library))

const readStatusLoop = (books) => {
    for (let i = 0; i < books.length; i++) {
        if (books[i].readingStatus === true) {
            console.log(`I've read ${books[i].title}`) 
        } else {
            console.log(`I've not read ${books[i].title}`)
        }
    }
}

// console.log(readStatusLoop(library))



// Write a Bubble Sort algorithm in JavaScript.
// Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted.

const testIntArray = [6,4,0,3,-2,1]

const bubbleSort = (array) => {
    return array.sort()
}

// console.log(bubbleSort(testIntArray))

const bubbleSort2 = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1]) {
            let el = array[i + 1]         //need to save the value in a variable because it will be assigned
            array[i + 1] = array[i]        //moves the first element back a space by re assigneing the second element its value
            array[i] = el                  //reassigns the first element the stored value of the second element              
        }
    }
    return array
}

// console.log(bubbleSort(testIntArray))

// Write a JavaScript program which returns a subset of a string.

const testString = 'dog'

const stringSubsetter = (word) => {
    let wordLength = word.length
    let subsetArray = []
    for (let i = 0; i < wordLength; i++) {

        for (let a = i + 1; a < wordLength + 1; a++) {
            // subsetArray.push(word[i])
            // const extraLetter = () => word[i + 1] ? word[i] + word[i + 1] : 'x'
            // subsetArray.push(extraLetter())
            subsetArray.push(word.slice(i, a))
            console.log(subsetArray)
        }
        // console.log(subsetArray)
        // wordLength--
    }
    // console.log(subsetArray)
}

// console.log(stringSubsetter(testString))




// Write a JavaScript program to calculate the area and perimeter of a circle.
// Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

const testRad = 2
const testRad2 = 3

const findPerimiter = (rad) => {
    return 2 * 3.14 * rad
}

// console.log(findPerimiter(testRad))
// console.log(findPerimiter(testRad2))

const findArea = (rad) => {
    return rad * rad * 3.14159
}

// console.log(findArea(testRad))
// console.log(findArea(testRad2))

// Write a JavaScript program to sort an array of JavaScript objects.

const testObjArray = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

const compare = (a, b) => {
    if (a.libraryID < b.libraryID) {
        return - 1
    } else if (a.libraryID > b.libraryID) {
        return 1
    } else {
    return 0
    }
}

const objectSorter = (arr) => {
    return arr.sort(compare)            //callback functions can be passed into the sort method
}

// console.log(objectSorter(testObjArray))

//  Write a JavaScript function to print all the methods in an JavaScript object.
const testObj = {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
}

const objectFunctions = (obj) => {
    // const allfunctions = [] 
    const propers = Object.getOwnPropertyNames(obj)
    let propers1 = Object.getOwnPropertyNames(Object)
    propers.forEach(prop => propers1.push(prop))
    propers.push(propers1)
    return propers1
}

// console.log(objectFunctions(testObj))
// console.log(objectFunctions())
// console.log(objectFunctions(testObj))

//  Write a JavaScript function to retrieve all the values of an object's properties. 
const objectValues = (obj) => {
    return Object.values(obj)
}

console.log(objectValues(testObj))