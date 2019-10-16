/*==========================================================
FUNCTION = assertEqual
a function that compares actual value to expected value and returns a pass or fail message
===========================================================*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*  
      allItems = an array of strings that we need to look through
      itemsToCount = an object specifying what to count
*/
const countOnly = function(allItems, itemsToCount) {
  const results={};
  for (const item of allItems){ //loops through firstNames array
    console.log(item);
    if (itemsToCount[item]){ //if object has key name as firstName array
      if (results[item]) { // if result has a key name as first name array 
        results[item] += 1; // if result with the key item already exists add one to existing value
      } else {
        results[item] = 1; // if result with the key item doesn't exit asign item as key and give it value of one
      }
    }
    // if(results[item]){
    //   results[item] += 1;
    // } else {
    //   results[item] = 1;
    // }
  }
  return results;
}; //closes function countOnly 

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
]; // closes array firstNames

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1); // jason only occurs once
assertEqual(result1["Karima"], undefined); // kariima is not present
assertEqual(result1["Fang"], 2); //fang repeats twice