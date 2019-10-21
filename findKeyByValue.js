
/*==========================================================
FUNCTION = findKeyByValue
a function that takes in an object and a value and returns the key of that value
===========================================================*/
const findKeyByValue = function(obj, value) {
  for (let element in obj) {
    if (obj[element] === value) {
      return element;
    }
  }
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   'sci_fi': "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);