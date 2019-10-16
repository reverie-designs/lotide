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

/*==========================================================
FUNCTION = findKeyByValue
a function that takes in an object and a value and returns the key of that value
===========================================================*/
const findKeyByValue = function(obj, value) {
  for (let element in obj) {
    if (obj[element] === value) {
      return element;
    }
  }
};


const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);