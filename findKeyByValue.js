
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