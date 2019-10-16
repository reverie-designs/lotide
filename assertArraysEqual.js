
let eqArrays = function(array1, array2){
  console.log(array1,array2);
  for(let i=0; i< array1.length; i++){
    if(array1[i]!==array2[i]){
      return false;
    }
  }
  return true;
};
let assertArrayEqual = function(actual, expected){
  if (eqArrays(actual, expected))  {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
}


assertArrayEqual([1, 2, 3], [1, 2, 4]);