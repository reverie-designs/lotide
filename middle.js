const middle = function(array) {
  let result = [];
  let middle = Math.floor((array.length - 1) / 2);
  if (array.length > 2) { //longer than two elements
    if (array.length % 2 !== 0) { //is odd
      // console.log(middle);
      result.push(array[middle]);
    } else {
      evenMid1 = Math.floor((array.length - 1) / 2);
      // console.log(middle);
      result.push(array[middle]);
      result.push(array[middle + 1]);
    }
  }
 // console.log(result);
  return result;
};

module.exports = middle;