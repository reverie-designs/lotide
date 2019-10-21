
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
