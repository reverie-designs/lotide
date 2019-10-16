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
FUNCTION = letterPositions
takes in a string
returns an object with the key of letters and the value of their position in the string
===========================================================*/

const letterPositions = function(sentence) {
  const results = {};
  //console.log('letter is: ' + sentence[i]);
  for (let letter of sentence) {
    results[letter] = [];
    for (let i = 0; i < sentence.length; i++) {
      if (letter === sentence[i]) {
        results[letter].push(i);
      }
    }
  }
  //console.log(results);
  return results;
};

//do we need to another object for repeated letters?
//do we need to covert number to string to allow for multiple results?

let words = "lighthouse in the house";
//console.log('length of words: ' + (words.length - 1));
//letterPositions(words);
let result = letterPositions('hello');
console.log(result);
assertArrayEqual(letterPositions('hello')['e'], [1]);
result = letterPositions(words);
console.log(result);
assertArrayEqual(letterPositions(words)['h'], [3, 5, 15, 18]);