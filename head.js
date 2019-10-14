// a function that compares actual value to expected value and returns a pass or fail message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🦖🦖🦖 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//function returns the first element within an array
const head = function(array){
  return array[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");