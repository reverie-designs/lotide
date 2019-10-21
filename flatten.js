/* THIS IS A FUNCTION TO FLATTEN AN ARRAY WITH OTHER ARRAYS IN IT */
const flatten = function(array){
  let result = [];
  for (element of array){
    if(Array.isArray(element)) {
      for(word of element) {
        result.push(word);
      }
    } else {
      result.push(element);
    }    
  }
  console.log(result);
  return result;
};

module.exports = flatten;