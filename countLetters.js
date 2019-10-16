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
FUNCTION = countLetters 
takes in a string
returns an object with the key of letters and the value of repeated letters in the given string
===========================================================*/
const countLetters = function(strings) {
  let results = {};
  for (let string of strings) {
    if (results[string]) {
      results[string] += 1;
      //console.log(results);
    } else {
      results[string] = 1;
      //console.log(results);
    }
  }
  //console.log(results);
  return results;
};

//countLetters('goodbyemylovebirdy');
countLetters('hello');
let outcome = countLetters('hello');
assertEqual(outcome['l'], 2); //expect true
assertEqual(outcome['o'], 1); //expect true
assertEqual(outcome['r'], undefined); //expect true
