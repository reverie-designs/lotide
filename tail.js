
//returns the tail end of an array except for the first element without changing original array
const tail = function(array) {
  //let length = array.length-1;
  let result = array.slice(1);
  return result;
};

module.exports = tail;
