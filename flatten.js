
/*========COMAPARES ARRAY VALUES RETURNS TRUE OR FALSE====*/

//function that compares the equality of two arrays

let eqArrays = function(array1, array2) {
  //console.log(array1, array2);
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

/*========COMPARES RESULT EXPECTED VS ACTUAL RESULT AND RETURNS A PATH OR FAIL MSG====*/

// function that sends out pass or fail message according to the values recieved in the previous function

let assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//example how to call function
//assertArrayEqual([1, 2, 3], [1, 2, 4]);

/* THIS IS A FUNCTION TO FLATTEN AN ARRAY WITH OTHER ARRAYS IN IT */
const flatten = function(array){
  let result = [];
  for (element of array){
    if(Array.isArray(element)) {
      //console.log('this is an array' + element);
      for(word of element) {
        result.push(word);
      }
    } else {
      result.push(element);
    }    
  }
  console.log(result);
  return result;
};
//test line 
array=[1, 2, [3, 4], 5, [6]];
//flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
//flatten(array);
assertArrayEqual((flatten(array)), [1, 2, 3, 4, 5, 6]);