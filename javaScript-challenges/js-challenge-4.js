// Create a function that duplicates the data passed in.

function arrayDup(data) {
    return [data, data]
}

console.log(arrayDup(7))

function nonArrayDup(data) {
    dupArray = [data, data]
    return dupArray.join(' ')
}

console.log(nonArrayDup('sshh'))