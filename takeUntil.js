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

/*=============================================
FUNCTION = takeUntil
takes in an array and a function 
slices and return a new array at the point when call 
back function returns true
===============================================*/

const takeUntil = function(array, callback) {
  let newArray =[];
  for (item of array) {
    if (callback(item) == false) {
      newArray.push(item);
    } else {
      break;
    }
  }  
 return newArray;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArrayEqual(results1,[ 1, 2, 5, 7, 2 ]);
//console.log(results1);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArrayEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
//console.log(results2);
