
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
module.exports = map;
// const words = ["ground", "control", "to", "major", "tom"];
// const printWords = words.filter(word => word[2]);

// const results1 = map(words, word => word[0]); // array with only first letters
// console.log(results1);
// const restults2 = map(words, word => word.length); // array of array item length numbers
// console.log(restults2);
// const restults3 = map(words, word => word[0]+ 'hey'); // array of first letter of each item with hey added 
// console.log(restults3);

// assertArrayEqual(['g','c','t','m','t'], results1);
// assertArrayEqual([6,7,2,5,3], restults2);
// assertArrayEqual(['ghey','chey', 'they', 'mhey', 'they'], restults3);
