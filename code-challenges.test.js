// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// describe("greeter", () => {
//     it("returns a generic greeting", () => {
//       expect(greeter()).toEqual("Hello, LEARN student!")
//     })
//   })

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codeConverter", (string) => {
    it("takes in a string and returns a string with a coded message (a>4, e>3, i>1, o>0", () => {
      expect(codeConverter(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codeConverter(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codeConverter(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })
//  ReferenceError: codeConverter is not defined

// b) Create the function that makes the test pass.
    // Create a function codeConverter that takes in a string as the parameter
    // Create a new array to convert a string to an array that holds new values 
        // use .split to split the array
        // use .map to iterate over the array
    // use conditional to update all vowels lower and upper case to desired number
        // a / A = 4
        // e / E = 3
        // i / I = 1
        // o / O = 0
    // return the array 
    // return the array back to a string .join and coded messages with voels converted

const codeConverter = (string) => {
    let newArray = string.split('').map((word) => {
        if(word === 'a' || word === 'A' ){
            return '4'
        } else if (word === 'e' || word === 'E' ) {
            return '3'
        } else if (word === 'i' || word === 'I' ) {
            return '1'
        } else if (word === 'o' || word === 'O' ) {
            return '0'
        } else {
            return word
        }
    })
    return newArray.join('')
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.



// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("narrow", () => {
    it(" takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
      expect(narrow(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(narrow(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })
//  ReferenceError: narrow is not defined

// b) Create the function that makes the test pass.
    // Create a function narrow that takes in 2 parameters: array and string
        // use .filter to filter the array since looking for a shorter array
        // use higher order function that takes the value from the array
        // use .toLowercase to search the array
            // this changes the array to all lower case so it can search if the array has a or e easier
                // did not think of using .toLowerCase for a really long time and was stuck for a very long time......
        // use .includes to check if the array has a or e in the string

const narrow = (array,string) => {
    return array.filter(value => value.toLowerCase().includes(string))
   }

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe("fullHouseChecker", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house. A full house is exactly one pair and one three of a kind", () => {
      expect(fullHouseChecker(hand1)).toEqual(true)
      expect(fullHouseChecker(hand2)).toEqual(false)
      expect(fullHouseChecker(hand3)).toEqual(false)
      expect(fullHouseChecker(hand4)).toEqual(true)
    })
  })
//  ReferenceError: fullHouseChecker is not defined

// b) Create the function that makes the test pass.
    // create a function called fullHouseChecker that takes in an array as the parameter
    // use .sort to sort the array in ascending order
    // Use a for loop to check if the first 3 numbers equal and last 2 are equal
        // 
    // If conditions do not meet, return false 


const fullHouseChecker = (array) => {
    let sort = array.sort()
    for (let i = 0;i < array.length; i++){
        if(sort[0] === sort[1] && sort[1] === sort[2] && sort[3] === sort[4]){
            return true
        } else if(sort[0] === sort[1] && sort[2] === sort[3] && sort[2] === sort[4]){
            return true
        } else {
            return false
        }
            
    }
}
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

