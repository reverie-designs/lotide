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
FUNCTION = eqObjects
Returns true if both objects have identical keys with identical values.
Otherwise false!
===========================================================*/

const eqObjects = function(object1, object2) {
  let result;
  if (Array.isArray(object1) === Array.isArray(object2)) {
    let obj1Keys = Object.keys(object1).sort(); //stores sorted object keys
    let obj2Keys = Object.keys(object2).sort();
    //console.log('Keys of obj2 ====== ' , obj2Keys);
    //console.log('Keys of obj1 ====== ' ,obj1Keys);
    
    //console.log('length 1: ' + obj1Length + 'length 2: ' + obj2Length);
    // ==checks the objects have the same amount of keys if not return false and exit
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
    for (let x = 0; x < obj1Keys.length; x++) { // ==loops through the keys in obj1
      for (let i = 0; i < obj2Keys.length; i++) { //==loops through the keys in obj2
        if (obj1Keys[x] === obj2Keys[i]) { // ==match keys in both objects
          //console.log('This is the keys of Second object: ' + obj2Keys[i]);
          //console.log('This is the keys of First object: ' + obj1Keys[x]);
          result = true; // ==assign value of true to result
        } else {
          result = false; // ==if the key values don't match return false
        }
      }
    }
    //console.log(result);
    return result;
  } else {
    return false;
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log('this is ba object' + ba);
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);