
/*==========================================================
FUNCTION = countLetters 
takes in a string
returns an object with the key of letters and the value of repeated letters in the given string
===========================================================*/
const countLetters = function(strings) {
  let results = {};
  for (let string of strings) {
    if (results[string]) {
      results[string] += 1;
      //console.log(results);
    } else {
      results[string] = 1;
      //console.log(results);
    }
  }
  //console.log(results);
  return results;
};
module.exports = countLetters;
// //countLetters('goodbyemylovebirdy');
// countLetters('hello');
// let outcome = countLetters('hello');
// assertEqual(outcome['l'], 2); //expect true
// assertEqual(outcome['o'], 1); //expect true
// assertEqual(outcome['r'], undefined); //expect true
