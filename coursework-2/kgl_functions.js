//COURSEWORK 2: KGL INVENTORY PROCESSING SYSTEM - KGL FUNCTIONS.JS


// Part A: Function Implementation (30 marks)

// 1. Create a file named kgl_functions.js . Write a function named
// calculateProcurementCost that:
// Takes two parameters: tonnageInKg and pricePerKg
// Returns the total cost (tonnage × price)
// If either parameter is not a number or is less than 0, return the string "Invalid input" (10marks)

// function to calculate procurement cost
function calculateProcurementCost(tonnageInKg, pricePerKg){
    // validate inputs

    // check if tonnageInKg is not a number or pricePerKg is not a number or either is less than 0
    if (typeof tonnageInKg !== "number" || 
        // check if pricePerKg is not a number
        typeof pricePerKg !== "number" || 
        // check if either tonnageInKg or pricePerKg is less than 0
        tonnageInKg < 0 || 
        // check if pricePerKg is less than 0
        pricePerKg < 0)
    {
        // return invalid input message
        return "Invalid Input";
    }
    // calculate and return total cost
    return tonnageInKg * pricePerKg;
}
// test the function with valid and invalid inputs
console.log(calculateProcurementCost(30, 1000));

// 2. Write an arrow function named validateBuyerName that:
// Takes one parameter: buyerName
// Returns true if the name length is >= 2 and the name is not empty
// Returns false otherwise (10 marks)

// arrow function to validate buyer name
const validateBuyerName = (buyerName) => {
    // check if buyerName is not empty and length is greater than or equal to 2
    return buyerName !== "" && buyerName.length > 2;
}

// 3. Create a function named checkUserAuthorization that:
// Takes one parameter: role
// Uses a switch statement to check the role
// Returns "procurement_and_sales" for 'Manager'
// Returns "sales_only" for 'Sales Agent'
// Returns "view_aggregations" for 'Director'
// Returns "unauthorized" for any other role (10 marks)
 
// function to check user authorization based on role
function checkUserAuthorization (role){
    // switch statement to determine authorization level
    switch(role){
        case 'Manager':
            return "procurement_and_sales";
        case 'Sales Agent':
            return "sales_only";
        case 'Director':
            return "view_aggregations";
        default:
            return "unauthorized";
    }

}

// test the function with different roles
console.log(checkUserAuthorization('Manager'));
console.log(checkUserAuthorization('Sales Agent'));
console.log(checkUserAuthorization('Director'));
console.log(checkUserAuthorization('Staff'));
console.log(checkUserAuthorization('manager'));


// Part B: Object Creation and Manipulation (35 marks)



/**
 * 4. Create a function createSalesRecord that takes four parameters ( produceName ,
tonnage , buyerName , amountPaid ) and returns an object with the following structure:
{
id: // Generate a random number between 1000-9999
produceName: // parameter value
tonnageInKgs: // parameter value
buyerName: // parameter value
amountPaid: // parameter value
saleDate: // current date using new Date()
isCreditSale: false
}
 */

// function to create a sales record object
function createSalesRecord(produceName, tonnage, buyerName, amountPaid){

    // return the sales record object with specified properties
    return {
        id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
        produceName: produceName,
        tonnageInKgs: tonnage,
        buyerName: buyerName,
        amountPaid: amountPaid,
        saleDate: new Date(),
        isCreditSale: false
    };
}
// test the function with sample data
console.log(createSalesRecord("Oranges", 600, "Simon Peter", 1_800));


/**
 * 5. Create a sales record object by calling your function with test data. Then:
Add a new property branch with value "Maganjo" using dot notation
Modify the isCreditSale property to true
Add a dueDate property using bracket notation
Use Object.keys() to get all property names and log them (10 marks)
 */

// create a sales record object using the function
let salesRecord = createSalesRecord("Lemons", 300, "Tumalu Jane", 1_000);

// add new property branch using dot notation
salesRecord.branch = "Maganjo";

// modify isCreditSale property to true
salesRecord.isCreditSale = true;

// add dueDate property using bracket notation
salesRecord["dueDate"] = new Date(Date.now()); // due date one week from now

// use Object.keys() to get all property names and log them
console.log(Object.keys(salesRecord));


/**
 * 6. Write a for...in loop that iterates over your sales record object and logs each property
name and value in the format: "Property: [name], Value: [value]" (10 marks)
 */
for (let property in salesRecord){

    // log each property name and value
    console.log(`Property: ${property}, Value: ${salesRecord[property]}`);
}


// Part C: Loop Implementation and Data Processing 

/**
 * 7. Create an array of daily procurement tonnages for a week:
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

Write code using a traditional for loop that:

Calculates the total tonnage for the week
Calculates the average daily tonnage
Logs both results (15 marks)
 */

// array of daily procurement tonnages for a week
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300]; 

// initialize total tonnage variable
let totalTonnage = 0;

// traditional for loop to calculate total tonnage
for (let i = 0; i < weeklyTonnage.length; i++){

    // add each day's tonnage to total
    totalTonnage += weeklyTonnage[i];
}

// calculate average daily tonnage
let averageDailyTonnage = totalTonnage / weeklyTonnage.length;

// log the results
console.log("Total tonnage for the week:", totalTonnage);
console.log("Average daily tonnage:", averageDailyTonnage);


/**
 * 8. Create an array of sales records (use your createSalesRecord function to create at least 5
records with varying data). Write code using a for...of loop that:
Counts how many credit sales exist ( isCreditSale === true )
Uses the continue statement to skip non-credit sales
Logs "Total credit sales: [count]" (15 marks)
 */

// array of sales records
let salesRecords1 = [
    createSalesRecord("Apples", 500, "Alice", 2000),
    createSalesRecord("Bananas", 300, "Bob", 1200),
    createSalesRecord("Cherries", 400, "Charlie", 1600),
    createSalesRecord("Dates", 600, "David", 2400),
    createSalesRecord("Elderberries", 700, "Eve", 2800)
];
// Manually set some sales to be credit sales
salesRecords1[0].isCreditSale = true;
salesRecords1[1].isCreditSale = true;
salesRecords1[3].isCreditSale = true;   
let creditSalesCount = 0;
for (let records of salesRecords1){
    if (!records.isCreditSale){
        continue;
    }
    creditSalesCount++;
}
console.log("Total credit sales:", creditSalesCount);


/**
 * 9. Simulate a stock check: Create an inventory array:
let inventory = [
{name: 'Beans', tonnage: 500},
{name: 'Maize', tonnage: 0},
{name: 'G-nuts', tonnage: 300}
];

Use a for loop with a break statement to:

Search for the first item with tonnage === 0
When found, log "Manager Alert: [produce name] is out of stock" and exit the loop
immediately (5 marks)
 */


// array called inventory
let inventory = [
{name: 'Beans', tonnage: 500},
{name: 'Maize', tonnage: 0},
{name: 'G-nuts', tonnage: 300},
{name: 'Rice', tonnage: 8}
];


for (let i = 0; i < inventory.length; i++){
    if (inventory[i].tonnage === 0){
        console.log(`Manager Alert: ${inventory[i].name} is out of stock`);
        break;
    }
    /**
     * else if (inventory[i].tonnage < 10) {
        console.log(`Manager Alert: ${inventory[i].name} is running low on stock`);
        // break;
    } 
     * 
     *  else {
        console.log(`${inventory[i].name} stock is sufficient`);
    }
     */
    
    
}


