// COURSEWORK 3: KGL ANALYTICS SYSTEM AND REPORTING SYSTEM - KGL_ANALYTICS.JS

//Part A: Higher Order Functions - Data Transformation (40marks)

/**
 * 1. Create a file named kgl_analytics.js . Create an array of at least 6 procurement record objects with this structure:
    {
    id: number,
    dealerName: string,
    produceType: string,
    tonnageInKgs: number,
    costInUgx: number,
    procurementDate: Date object
    }
 */
const procurementRecords = [
  {
    id: 2,
    dealerName: "Dawa Edina Hillary",
    produceType: "Rice",
    tonnageInKgs: 4_000,
    costInUgx: 90_000,
    procurementDate: new Date("2023-12-22"),
  },
  {
    id: 1,
    dealerName: "Sokiri Kennedy",
    produceType: "Beans",
    tonnageInKgs: 3_000,
    costInUgx: 40_000,
    procurementDate: new Date("2025-12-26"),
  },
  {
    id: 2,
    dealerName: "Dawa Edina Hillary",
    produceType: "Rice",
    tonnageInKgs: 4_000,
    costInUgx: 90_000,
    procurementDate: new Date("2023-12-22"),
  },
  {
    id: 3,
    dealerName: "Monday Suzan",
    produceType: "Cassava",
    tonnageInKgs: 800,
    costInUgx: 55_000,
    procurementDate: new Date("2023-12-18"),
  },
  {
    id: 4,
    dealerName: "Juma Moses",
    produceType: "Soybeans",
    tonnageInKgs: 3_650,
    costInUgx: 45_000,
    procurementDate: new Date("2025-12-14"),
  },
  {
    id: 5,
    dealerName: "Sebit Paul",
    produceType: "Maize",
    tonnageInKgs: 1850,
    costInUgx: 78999,
    procurementDate: new Date("2024-02-19"),
  },

  {
    id: 1,
    dealerName: "Sokiri Kennedy",
    produceType: "Beans",
    tonnageInKgs: 3_000,
    costInUgx: 40_000,
    procurementDate: new Date("2025-12-26"),
  },
  {
    id: 6,
    dealerName: "Eva Humble",
    produceType: "Potatoes",
    tonnageInKgs: 3_756,
    costInUgx: 76_543,
    procurementDate: new Date("2024-3-28"),
  },
];

/**
  * 2. Use the .map() method to create a new array where each record includes a new
calculated property costPerKg (costInUgx ÷ tonnageInKgs). The new array should have
objects with the original properties PLUS the new costPerKg property. (10 marks)
  */

// Use the .map() method to create a new array with the additional costPerKg property
const recordsCostPerKg = procurementRecords.map((record) => {
  return {
    ...record, // This copies all properties from the existing record object into the new object.
    costPerKg: record.costInUgx / record.tonnageInKgs,
  };
});

console.log("Records with Cost Per Kg:", recordsCostPerKg);
/**
 * 3. Use the .filter() method to create a new array containing only procurement records
 * where:
 * tonnageInKgs >= 1000 (meeting the minimum requirement for individual dealers)
 * Log the filtered array and its length (10 marks)
 
*/

const onlyProcurementRecords = procurementRecords.filter(
  (record) => record.tonnageInKgs >= 1000
);

console.log(
  "Filtered Procurement Records (tonnageInKgs >= 1000):",
  onlyProcurementRecords
);
console.log(
  "Number of Records meeting the tonnageInKgs >= 1000 requirement:",
  onlyProcurementRecords.length
);

/**
 * 4. Use the .reduce() method to calculate:
 * The total tonnage procured across all records
 * The total cost (sum of all costInUgx values)
 * Log both totals with appropriate labels using template literals (10 marks)
 */

// Calculate total tonnage and total cost using the .reduce() method
const totalTonnage = procurementRecords.reduce(
    // Arrow function to sum up the tonnageInKgs from each record
  (accumulator, record) => accumulator + record.tonnageInKgs,
  0
);

// Arrow function to sum up the costInUgx from each record
const totalCost = procurementRecords.reduce(
    // Arrow function to sum up the costInUgx from each record
  (accumulator, record) => accumulator + record.costInUgx,
  0
);

// Log the totals with appropriate labels using template literals
console.log(`Total Tonnage Procured: ${totalTonnage} kg`);
// Log the total cost with appropriate formatting
console.log(`Total Cost: UGX ${totalCost.toLocaleString()}`);

//Part B: Sets for Unique Data Management (30 marks)
/***
 * 5. Create a function getUniqueDealers that:
 * Takes an array of procurement records as a parameter
 * Uses a Set to extract all unique dealer names
 * Returns an array of unique dealer names (convert Set back to array)
 * Call the function with your procurement data and log the result (15 marks)
 */

// Define the function getUniqueDealers to extract unique dealer names from procurement records
function getUniqueDealers(records) {
    // Create a new Set to store unique dealer names
  const dealerSet = new Set();
    // Iterate over the procurement records and add each dealer name to the Set
  records.forEach((record) => {
    // Add the dealerName from each record to the Set
    dealerSet.add(record.dealerName);
  });

  // Convert the Set of unique dealer names back to an array and return it
  return Array.from(dealerSet);
}

// Call the function with the procurementRecords array and log the unique dealer names
const uniqueDealers = getUniqueDealers(procurementRecords);
// Log the array of unique dealer names
console.log("Unique Dealer Names:", uniqueDealers);

/**
 * 6. Create a Set called authorizedRoles and add these values: 'Manager' , 'Director' .
 * Write a function isAuthorizedForProcurement that:
 * Takes a userRole parameter
 * Uses the .has() method to check if the role exists in the Set
 * Returns a Boolean
 * Test the function with different roles and log the results (15 marks)
 */

// First, create a Set called authorizedRoles as instructed with the specified roles
const authorizedRoles = new Set(["Manager", "Director"]);

// Secondly, define the function isAuthorizedForProcurement that checks if a given role is authorized
function isAuthorizedForProcurement(userRole) {
  // Thirdly, check if the role exists in the Set using the .has() method and  return the result
  return authorizedRoles.has(userRole);
}

// Then lastly, test the function with different roles and log the results

// true
console.log(isAuthorizedForProcurement("Manager"));

// true
console.log(isAuthorizedForProcurement("Director"));

// false
console.log(isAuthorizedForProcurement("Employee"));

// false
console.log(isAuthorizedForProcurement("Intern"));

// Part C: Maps for Price Management (30 marks)

/**
 * 7. Create a Map called kglPriceList and set the following key-value pairs:
 * 'Beans' → 5500
 * 'Grain Maize' → 4800
 * 'Cow peas' → 6000
 * 'G-nuts' → 7200
 * 'Soybeans' → 5800 (10 marks)
 *
 */

// Create a Map named kglPriceList to store produce types and their corresponding prices per kg
const kglPriceList = new Map([
  ["Beans", 5500],
  ["Grain Maize", 4800],
  ["Cow peas", 6000],
  ["G-nuts", 7200],
  ["Soybeans", 5800],
]);

// Log the kglPriceList Map to verify its contents
console.log("KGL Price List Map:", kglPriceList);

/**
 * 8. Write a function calculateSaleTotal that:
 * Takes two parameters: produceName (string) and tonnageInKgs (number)
 * Uses the Map's .get() method to retrieve the price per kg for that produce
 * If the produce doesn't exist in the Map, return "Price not found"
 * Otherwise, return the total sale amount (price × tonnage)
 * Test with multiple produce types (15 marks)
 */

// Create a function called calculateSaleTotal to calculate the total sale amount based on produce name and tonnage
function calculateSaleTotal(produceName, tonnageInKgs) {
    // Retrieve the price per kg for the specified produce using the Map's .get() method
  const pricePerKg = kglPriceList.get(produceName);

  // Check if the produce exists in the Map; if not, return "Price not found"
  if (pricePerKg === undefined) {
    return "Price not found";
  }

  // If the produce exists, calculate and return the total sale amount
  return pricePerKg * tonnageInKgs;
}
// Testing the function with multiple produce types
// Test with Beans
console.log(
  "Total Sale for 2000kg of Beans:",
  calculateSaleTotal("Beans", 2000)
);
// Test with G-nuts
console.log(
  "Total Sale for 1500kg of G-nuts:",
  calculateSaleTotal("G-nuts", 1500)
);
// Test with Soybeans
console.log(
  "Total Sale for 1000kg of Rice (not in Map):",
  calculateSaleTotal("Rice", 1000)
);


/**
 *
 * 9. Write code that:
 * Uses a loop to iterate over your kglPriceList Map
 * For each entry, logs: "Produce: [name], Price per Kg: [price] UgX"
 * Calculates and logs the highest price in the Map using the .reduce() method on the
 * Map values (5 marks)
 */

// Loop through the kglPriceList Map
kglPriceList.forEach((price, produceName) => {
    // Log each produce name and its price per kg
  console.log(`Produce: ${produceName}, Price per Kg: ${price} UgX`);
});

// Calculate and log the highest price in the Map
const highestPrice = Array.from(kglPriceList.values()).reduce(
    // Arrow function to find the maximum price
  (max, current) => Math.max(max, current),
  0
);
// Log the highest price found in the KGL Price List
console.log("Highest Price in KGL Price List:", highestPrice);
