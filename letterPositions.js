
/*==========================================================
FUNCTION = letterPositions
takes in a string
returns an object with the key of letters and the value of their position in the string
===========================================================*/

const letterPositions = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    results[letter] = [];
    for (let i = 0; i < sentence.length; i++) {
      if (letter === sentence[i]) {
        results[letter].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;
//do we need to another object for repeated letters?
//do we need to covert number to string to allow for multiple results?

// let words = "lighthouse in the house";
// //console.log('length of words: ' + (words.length - 1));
// //letterPositions(words);
// let result = letterPositions('hello');
// console.log(result);
// assertArrayEqual(letterPositions('hello')['e'], [1]);
// result = letterPositions(words);
// console.log(result);
// assertArrayEqual(letterPositions(words)['h'], [3, 5, 15, 18]);