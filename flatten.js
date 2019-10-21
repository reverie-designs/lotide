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
// //test line 
// array=[1, 2, [3, 4], 5, [6]];
// //flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
// //flatten(array);
// assertArrayEqual((flatten(array)), [1, 2, 3, 4, 5, 6]);