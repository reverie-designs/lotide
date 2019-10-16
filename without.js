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

//Function that removes a single value from an array according to a specified parameter
let without = function (input, subtract) {
  let array = input;
  let quest;
  for (let word of array) {
    for (let item of subtract) {
      if (word === item) {
        quest = item;
      }
    }
  }
  const filtered = array.filter(function(value) {
    return value !== quest;
  });
  console.log(filtered);
};
// let words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
without(["hello", "world", "lighthouse"], ["lighthouse"]);
// console.log('This is the original array: ' + words);
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
// without([1, 2, 3], [1]); // => [2, 3]
// assertArrayEqual(words, ["hello", "world", "lighthouse"]);