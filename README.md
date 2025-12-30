# Graded JavaScript Assignment
## **Coursework 1: KGL Data Validation System**

**Focus Areas:** Variables, Data Types, Strings, Booleans, Operators, Conditionals, Arrays

**Estimated Time:** 90-120 minutes

**Total Marks:** 100

### Part A: Variable Declaration and Type Checking (20 marks)

 1. Create a file named kgl_validation.js . Declare the following variables using appropriate
keywords ( let or const ):
     - companyName with the value "Karibu Groceries LTD"
     - minimumTonnage with the value 1000
     - isOperational with the value true
     - managerName (declare but do not assign a value)
     - closedBranches with the value null

 2. Use the typeof operator to check and log the data type of each variable. (5 marks)
 3.  Write comments (single-line and multiline) explaining why you chose let or const for
each variable. (5 marks)

### Part B: String Manipulation and Validation (25 marks)
4. Declare a variable dealerNameInput with the value " james BOND " (note the extra
spaces and inconsistent capitalization).
5. Write code that:
   * Removes the leading and trailing whitespace
   * Converts the cleaned name to proper title case (first letter of each word capitalized)
   * Stores the result in a new variable cleanDealerName
   * Logs the result using a template literal: "Cleaned Dealer Name: [name]" (10 marks)
6. Write a validation check using comparison operators to verify that cleanDealerName :
   * Has a length of not less than 2 characters
   * Is not empty
   * Log "Valid dealer name" or "Invalid dealer name" based on the result (10 marks)
  
### Part C: Conditional Logic and Business Rules (30 marks)
7. Create variables for a procurement record:

    let userRole = 'Sales Agent';<br>
    let procurementTonnage = 1500;<br>
    let produceType = 'Beans';<br>
    let costInUgx = '50000';<br>

8. Implement the following KGL business rules using if...else if...else statements:
    * Rule 1: No sales agent is allowed to record any produce entry. If userRole is 'Sales Agent', log an error message and do NOT proceed with the other checks. (10 marks)
    * Rule 2: For individual dealers, tonnage must be not less than 1000kg. Check if procurementTonnage >= 1000 . (5 marks)
    * Rule 3: The cost must be not less than 5 digits. First convert costInUgx to a Number type, then check if it's >= 10000. (10 marks)
      
9. Use the logical AND ( && ) operator to create a single Boolean expression that checks if BOTH tonnage and cost conditions are met, and log "Procurement record valid" or
"Procurement record invalid". (5 marks)

### Part D: Arrays and Produce Management (25 marks)
10. Create an array named kglProduce containing the five types of produce: ['Beans', 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans'] . (5 marks)
11. Write code that:
    * Adds a new produce type "Green Peas" to the end of the array
    * Removes the first item from the array (simulate oldest stock being sold)
    * Checks if "G-nuts" exists in the array using an appropriate array method
    * Logs the final array and its length (15 marks)
      
12. Create a second array branch2Produce with values ['Maize', 'Beans'] . Use the .concat() method to merge kglProduce and branch2Produce into a new array called
allProduce . (5 marks)




## Coursework 2: KGL Inventory Processing System
**Focus Areas:** Loops, Functions, Objects, Date Object<br>
**Estimated Time:** 120-150 minutes,<br>
**Total Marks:** 100

### Part A: Function Implementation (30 marks)
1. Create a file named kgl_functions.js . Write a function named
    * calculateProcurementCost that:
    * Takes two parameters: tonnageInKg and pricePerKg
    * Returns the total cost (tonnage × price)
    * If either parameter is not a number or is less than 0, return the string "Invalid input" (10 marks)

2. Write an arrow function named validateBuyerName that:
    * Takes one parameter: buyerName
    * Returns true if the name length is >= 2 and the name is not empty
    * Returns false otherwise (10 marks)
3. Create a function named checkUserAuthorization that:
  Takes one parameter: role
    * Uses a switch statement to check the role
    * Returns "procurement_and_sales" for 'Manager'
    * Returns "sales_only" for 'Sales Agent'
    * Returns "view_aggregations" for 'Director'
    * Returns "unauthorized" for any other role (10 marks)
  
4. Create a function createSalesRecord that takes four parameters ( produceName , tonnage , buyerName , amountPaid ) and returns an object with the following structure:
{
    id: // Generate a random number between 1000-9999
    produceName: // parameter value
    tonnageInKgs: // parameter value
    buyerName: // parameter value
    amountPaid: // parameter value
    saleDate: // current date using new Date()
    isCreditSale: false
}
(15 marks)

5. Create a sales record object by calling your function with test data. Then:
    * Add a new property branch with value "Maganjo" using dot notation
    * Modify the isCreditSale property to true
    * Add a dueDate property using bracket notation
    * Use Object.keys() to get all property names and log them (10 marks)
      
6. Write a for...in loop that iterates over your sales record object and logs each property
name and value in the format: "Property: [name], Value: [value]" (10 marks)


### Part C: Loop Implementation and Data Processing (35 marks)

7. Create an array of daily procurement tonnages for a week:
    let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

Write code using a traditional for loop that:
    * Calculates the total tonnage for the week
    * Calculates the average daily tonnage
    * Logs both results **(15 marks)**
    
8. Create an array of sales records (use your createSalesRecord function to create at least 5 records with varying data). Write code using a for...of loop that:
    * Counts how many credit sales exist ( isCreditSale === true )
    * Uses the continue statement to skip non-credit sales
    * Logs "Total credit sales: [count]" (15 marks)
       
9. Simulate a stock check: Create an inventory array:
    let inventory = [<br>
    {name: 'Beans', tonnage: 500},<br>
    {name: 'Maize', tonnage: 0},<br>
    {name: 'G-nuts', tonnage: 300}<br>
];

Use a for loop with a break statement to:
    * Search for the first item with tonnage === 0
    * When found, log "Manager Alert: [produce name] is out of stock" and exit the loop immediately (5 marks)

## Coursework 3: KGL Analytics and Reporting System
**Focus Areas:** Objects, Higher Order Functions, Sets, Maps<br>
**Estimated Time:** 120-150 minutes<br>
**Total Marks:** 100

### Part A: Higher Order Functions - Data Transformation (40 marks)
1. Create a file named kgl_analytics.js . Create an array of at least 6 procurement record objects with this structure:
    {
     id: number, <br>
     dealerName: string,<br>
     produceType: string,<br>
     tonnageInKgs: number,<br>
     costInUgx: number,<br>
     procurementDate: Date object<br>
    }<br>
   **(10 marks)**

2. Use the .map() method to create a new array where each record includes a new calculated property costPerKg (costInUgx ÷ tonnageInKgs). The new array should have
objects with the original properties PLUS the new costPerKg property. (10 marks)

3. Use the .filter() method to create a new array containing only procurement records
where:
    * tonnageInKgs >= 1000 (meeting the minimum requirement for individual dealers)
    * Log the filtered array and its length (10 marks)
      
4. Use the .reduce() method to calculate:
    * The total tonnage procured across all records
    * The total cost (sum of all costInUgx values)
    * Log both totals with appropriate labels using template literals (10 marks)

  ### Part B: Sets for Unique Data Management (30 marks)

5. Create a function getUniqueDealers that:
    * Takes an array of procurement records as a parameter
    * Uses a Set to extract all unique dealer names
    * Returns an array of unique dealer names (convert Set back to array)
    * Call the function with your procurement data and log the result (15 marks)
      
6. Create a Set called authorizedRoles and add these values: 'Manager' , 'Director' .
Write a function isAuthorizedForProcurement that:
    * Takes a userRole parameter
    * Uses the .has() method to check if the role exists in the Set
    * Returns a Boolean
    * Test the function with different roles and log the results (15 marks)
  
### Part C: Maps for Price Management (30 marks)

7. Create a Map called kglPriceList and set the following key-value pairs:
    'Beans' → 5500 <br>
    'Grain Maize' → 4800<br>
    'Cow peas' → 6000 <br>
    'G-nuts' → 7200<br>
    'Soybeans' → 5800 **(10 marks)**
   
9. Write a function calculateSaleTotal that:
    * Takes two parameters: produceName (string) and tonnageInKgs (number)
    * Uses the Map's .get() method to retrieve the price per kg for that produce
    * If the produce doesn't exist in the Map, return "Price not found"
    * Otherwise, return the total sale amount (price × tonnage)
    * Test with multiple produce types (15 marks)
      
10. Write code that:
    * Uses a loop to iterate over your kglPriceList Map
    * For each entry, logs: "Produce: [name], Price per Kg: [price] UgX"
    * Calculates and logs the highest price in the Map using the .reduce() method on the Map values **(5 marks)**


Author: Dawa Edina Hillary
Date: 30/12/2025
