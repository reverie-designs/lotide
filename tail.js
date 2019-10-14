// a function that compares actual value to expected value and returns a pass or fail message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🦖🦖🦖 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//returns the tail end of an array except for the first element without changing original array
const tail = function(array) {
  //let length = array.length-1;
  let result = array.slice(1);
  //return result;
  console.log(result);
};
let testArray = ['light', 'cat', 'dog'];
tail(testArray);
console.log(testArray);
assertEqual(testArray.length, 3);
let singleItemArray = ['kitten'];
tail(singleItemArray);
assertEqual(singleItemArray.length, 1);