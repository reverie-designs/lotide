/* ======================================
    FUNCTION: assertEqual
    compares actual value to expected value 
    and returns a pass or fail message
  ======================================
*/
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


/* ======================================
    FUNCTION: findKey
    takes in an object and a call back function 
    return the first key for which the callback returns a true
  ======================================
*/

const findKey = function(object, callback) {
  let results;
  for (let [key, value] of Object.entries(object)) {
    if (callback(value) === true) {
      results = key;
      break;
    } else {
      results = undefined;
    }
  }
  console.log(results);
  return results;
};
let finalResult = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(finalResult, "noma");