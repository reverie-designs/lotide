/*=============================================
FUNCTION = eqArrays
COMAPARES ARRAY VALUES RETURNS TRUE OR FALSE
===============================================*/

//function that compares the equality of two arrays

const eqArrays = function(array1, array2) {
  //console.log(array1, array2);
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

/*==========================================================
FUNCTION = assertArrayEqual
COMPARES RESULT EXPECTED VS ACTUAL RESULT AND RETURNS A PATH OR FAIL MSG
===========================================================*/

// function that sends out pass or fail message according to the values recieved in the previous function

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//example how to call function
//assertArrayEqual([1, 2, 3], [1, 2, 4]);


/*==========================================================
FUNCTION = MAP
creates a new array of values from and old array of values
that passes through a callback function
===========================================================*/
const map = function(array, func){
  let results = [];
  for(item of array){
    results.push(func(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const printWords = words.filter(word => word[2]);

const results1 = map(words, word => word[0]); // array with only first letters
console.log(results1);
const restults2 = map(words, word => word.length); // array of array item length numbers
console.log(restults2);
const restults3 = map(words, word => word[0]+ 'hey'); // array of first letter of each item with hey added 
console.log(restults3);

assertArrayEqual(['g','c','t','m','t'], results1);
assertArrayEqual([6,7,2,5,3], restults2);
assertArrayEqual(['ghey','chey', 'they', 'mhey', 'they'], restults3);
