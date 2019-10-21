
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
  return filtered;
};

module.exports = without;

// // let words = ["hello", "world", "lighthouse"];
// // without(words, ["lighthouse"]);
// without(["hello", "world", "lighthouse"], ["lighthouse"]);
// // console.log('This is the original array: ' + words);
// // without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
// // without([1, 2, 3], [1]); // => [2, 3]
// // assertArrayEqual(words, ["hello", "world", "lighthouse"]);