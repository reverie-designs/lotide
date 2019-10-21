
/*==========================================================
FUNCTION = eqObjects
Returns true if both objects have identical keys with identical values.
Otherwise false!
===========================================================*/

const eqObjects = function(object1, object2) {
  let result;
  if (Array.isArray(object1) === Array.isArray(object2)) {
    let obj1Keys = Object.keys(object1).sort(); //stores sorted object keys
    let obj2Keys = Object.keys(object2).sort();
    // ==checks the objects have the same amount of keys if not return false and exit
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
    for (let x = 0; x < obj1Keys.length; x++) { // ==loops through the keys in obj1
      for (let i = 0; i < obj2Keys.length; i++) { //==loops through the keys in obj2
        if (obj1Keys[x] === obj2Keys[i]) { // ==match keys in both objects
          result = true; // ==assign value of true to result
        } else {
          result = false; // ==if the key values don't match return false
        }
      }
    }
    //console.log(result);
    return result;
  } else {
    return false;
  }
};
module.exports = eqObjects;