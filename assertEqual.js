// a function that compares actual value to expected value and returns a pass or fail message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('Peace of cake', 'Peace of cake');
assertEqual(33, 33);
assertEqual(33, 11 * 3);
assertEqual(1, 2);