
/*==========================================================
FUNCTION = eqObjects
Returns true if both objects have identical keys with identical values.
Otherwise false!
===========================================================*/

const eqObjects = function(object1, object2) {
  let result;
  if (Array.isArray(object1) === Array.isArray(object2)) {
    let obj1Keys = Object.keys(object1).sort(); //stores sorted object keys
    let obj2Keys = Object.keys(object2).sort();
    // checks the objects have the same amount of keys if not return false and exit
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
    for (let x = 0; x < obj1Keys.length; x++) { // loops through the keys in obj1
      for (let i = 0; i < obj2Keys.length; i++) { //loops through the keys in obj2
        if (obj1Keys[x] === obj2Keys[i]) { // match keys in both objects
          result = true; //assign value of true to result
        } else {
          result = false; // if the key values don't match return false
        }
      }
    }
    return result;
  } else {
    return false;
  }
};

/*==========================================================
FUNCTION = assertObjectsEqual
takes in two objects {expected object} {actual object} and evaluates their
 equality by printing PASS and FAIL msgs
===========================================================*/

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= built in utility function
  // console.log(`Actual Object: ${inspect(actual)}`);
  // console.log(`Expected Object: ${inspect(expected)}`);
  if (eqObjects(actual, expected)) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `⛔️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

/*
  console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `⛔️ Assertion Failed: ${actual} !== ${expected}`);
*/