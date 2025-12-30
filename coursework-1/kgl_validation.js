//AUTHOR: DAWA EDINA HILLARY
//DATE: 30TH DECEMBER, 2025
//COURSE: INTRODUCTION TO SOFTWARE DEVELOPMENT - JAVASCRIPT
//INSTITUTION: REFACTORY ACADEMY



//COURSEWORK 1: KGL VALIDATION SYSTEM - KGL_VALIDATION.JS


// Part A: Variable Declaration and Type Checking (20 marks)


/**
 * 1. Create a file named kgl_validation.js . Declare the following variables using appropriate
 * keywords ( let or const ):
 * companyName with the value "Karibu Groceries LTD"
 * minimumTonnage with the value 1000
 * isOperational with the value true
 * managerName (declare but do not assign a value)
 * closedBranches with the value null
 */

// Variable declarations

const companyName = "Karibu Groceries LTD";
const minimumTonnage = 1000;
const isOperational = true;
let managerName;
let closedBranches = null;

// 2. Use the typeof operator to check and log the data type of each variable. (5 marks)

// checking the data type of the companyName variable
console.log("The data type of the companyName variable is", typeof companyName);

//checking the data type of minimumTonnage variable
console.log(
  "The data type of the minimumTonnage variable is",
  typeof minimumTonnage
);

//checking the data type of isOperational variable
console.log(
  "The data type of the isOperational variable is",
  typeof isOperational
);

//checking the data type of managerName variable
console.log("The data type of the managerName variable is", typeof managerName);

//checking the data type of closedBranches variable
console.log(
  "The data type of the closedBranches variable is",
  typeof closedBranches
);

// 3. Write comments (single-line and multiline) explaining why you chose let or const for each variable. (5 marks)

// single-line comments
// I declared the companyName variable with const because the company name will remain "Karibu Groceries LTD", it won't change.

// I declared the minimumTonnage variable with const because it will remain constant, it won't change.

/*
 Declared the isOperational variable with const because it will be constant only the boolean value will change to true or false
*/

/*
I declared the managerName with let because the manager can be fired or can resign and a new manager can be hired, which means manager's name won't be constant.
*/

/*
I declared the closedBranches with let because the closed branches can be reopened and other branches can be closed.
*/




//Part B: String Manipulation and Validation (25 marks)


//4. Declare a variable dealerNameInput with the value " james BOND " (note the extra spaces and inconsistent capitalization).

let dealerNameInput = "   james Bond   ";

// first log to see the differences after using trim
console.log("String with trailing whitespace:", dealerNameInput);

//5. Write code that:
// Removes the leading and trailing whitespace
let trimmedDealerName = dealerNameInput.trim()
console.log("Removed the trailing whitespaces:", trimmedDealerName);

// Converts the cleaned name to proper title case (first letter of each word capitalized)

//This is to convert the string to proper title case by first splitting the string into words
let words = trimmedDealerName.split(" ");
console.log(words);

// An anonymous arrow callback function used inside the map() method to convert the first letter of each word to uppercase and the rest to lowercase

let titleCaseDealerNameWords = words.map(

    word => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
)

console.log("Title Case: ", titleCaseDealerNameWords);


//OR

// Using regex to convert to proper title case

// let lowerCasedName = trimmedDealerName.toLocaleLowerCase();
// console.log("Converted name to lowercase:", lowerCasedName);  

//     /*new variable*/   //fixes inconsistent capitalization

// let titleCaseDealerName = lowerCasedName.replace(/\b\w/g, c => c.toUpperCase()); //This line finds the first letter of each word in the string and converts it to uppercase, creating a proper title-Cased name.
// //cleanDealerName - new variable
// //lowerCasedName - This is the string we are working on.
// .replace()    - replace() searches the string for certain characters and replaces them.
// string.replace(pattern, replacement)
      //pattern → /\b\w/g
      //replacement → c => c.toUpperCase()

      /*
      /\b\w/g (the pattern)

            🔹 \b → word boundary

            Means “the start of a word”

            Matches the position before the first letter of each word

            🔹 \w → word character

            Matches a letter (a–z), number, or underscore

            🔹 Together: \b\w

            Matches the first letter of each word

            🔹 g → global flag

            Means “do this for all matches”, not just the first one


         c => c.toUpperCase()

              * This is an arrow function (used inline, not declared separately).

              * c = each matched character (j, then b)

              * toUpperCase() converts it to uppercase

      */

console.log("Proper Title case string:", titleCaseDealerNameWords);

// Stores the result in a new variable cleanDealerName. The ".join(" ")" is used to join the array of words back into a single string with spaces in between.
let cleanDealerName = titleCaseDealerNameWords.join(" ");

// Logs the result using a template literal: "Cleaned Dealer Name: [name]" (10 marks)
console.log(`Cleaned Dealer Name: ${cleanDealerName}`);

// 6. Write a validation check using comparison operators to verify that cleanDealerName :
// Has a length of not less than 2 characters
// Is not empty
// Log "Valid dealer name" or "Invalid dealer name" based on the result (10 marks)

if (cleanDealerName !== "" && cleanDealerName.length >= 2) {
    console.log("Valid dealer name");
} else {
    console.log("Invalid dealer name");
}


// Part C: Conditional Logic and Business Rules (30 marks)
//7. Create variables for a procurement record:

// let userRole = 'Sales Agent';
// let procurementTonnage = 1500;
// let produceType = 'Beans';
// let costInUgx = '50000';

let userRole = 'Sales Agent';
let procurementTonnage = 1500;
let produceType = 'Beans';
let costInUgx = '50000';
let costNumber = Number(costInUgx);

// 8. Implement the following KGL business rules using if...else if...else statements:
// Rule 1: No sales agent is allowed to record any produce entry. If userRole is 'Sales
// Agent', log an error message and do NOT proceed with the other checks. (10 marks)
// Rule 2: For individual dealers, tonnage must be not less than 1000kg. Check if
// procurementTonnage >= 1000 . (5 marks)
// Rule 3: The cost must be not less than 5 digits. First convert costInUgx to a Number
// type, then check if it's >= 10000. (10 marks)



// Check business rules using if...else if...else statements
if(userRole === 'Sales Agent'){
  console.log("Sorry, you don't have the rights to record any produce entries");
}

// Check for individual dealer tonnage requirement
else if(userRole === 'individual dealer' && procurementTonnage < 1000){
  console.log("The tonnage must be not be less than 1000kg")

}

//  Check for cost requirement
else if(costNumber < 1000){
  console.log("Input error, the amount must be at least 5 digits.")
}
// If all checks pass
else{
console.log("The entries has been recorded successfully")
}



// 9. Use the logical AND ( && ) operator to create a single Boolean expression that checks if
// BOTH tonnage and cost conditions are met, and log "Procurement record valid" or
// "Procurement record invalid". (5 marks)

// Check if both tonnage and cost conditions are met using logical AND operator 
let isValid = procurementTonnage >= 1000 && costNumber >= 10000;

// If the condition is met, log the result
if (isValid){
  console.log("The procurment record is valid ")
}

// If the condition is not met, log the result
else{
  console.log("The procurement record is invalid")
}


// Part D: Arrays and Produce Management (25 marks)

// 10. Create an array named kglProduce containing the five types of produce: ['Beans', 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans'] . (5 marks)

let kglProduce = ['Beans', 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans'] 
console.log(kglProduce);

// 11. Write code that:
  // - Adds a new produce type "Green Peas" to the end of the array

    kglProduce.push("Green Peas");
    console.log(kglProduce);

  // - Removes the first item from the array (simulate oldest stock being sold)

    kglProduce.shift([0]);
    console.log(kglProduce);

  // - Checks if "G-nuts" exists in the array using an appropriate array method

  let isExist = kglProduce.includes('G-nuts')
  console.log(isExist);
  // - Logs the final array and its length (15 marks)
  console.log("The final array:", kglProduce);
  console.log("The length of the final array is:", kglProduce.length);


// 12. Create a second array branch2Produce with values ['Maize', 'Beans'] . Use the .concat() method to merge kglProduce and branch2Produce into a new array called allProduce . (5 marks)
// second array
let branch2Produce = ['Maize', 'Beans'];
kglProduce = [ 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans', 'Green Peas' ]

// merge the two arrays using concat() method
let allProduce = branch2Produce.concat(kglProduce);
console.log("This is the merged array:", allProduce);


