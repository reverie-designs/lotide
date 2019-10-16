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
FUNCTION = middle
Finds the middle of an array
===========================================================*/

const middle = function(array) {
  let result = [];
  let middle = Math.floor((array.length - 1) / 2);
  if (array.length > 2) { //longer than two elements
    if (array.length % 2 !== 0) { //is odd
      // console.log(middle);
      result.push(array[middle]);
    } else {
      evenMid1 = Math.floor((array.length - 1) / 2);
      // console.log(middle);
      result.push(array[middle]);
      result.push(array[middle + 1]);
    }
  }
  console.log(result);
  return result;
};

//middle([1,2,9,8,7,9,10,11,12]); //7
//middle([1, 2, 3, 4, 5, 6]); //[3,4]
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);