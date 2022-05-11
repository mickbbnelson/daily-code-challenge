// write a function that generates a random number

function randomNumber(high){
    // return Math.floor(Math.random() * high)
   return Math.floor(Math.random() * high)
}

console.log(randomNumber(3))



// Notes:
// Math.random() generates a number between 0 and 1
//  Multiplying it times the high multiplies it by a whole number to create a new float number
// floor rounds it down 
