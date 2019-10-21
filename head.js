// a function that compares actual value to expected value and returns a pass or fail message
const assertEqual = require('./assertEqual');
//function returns the first element within an array
const head = function(array){
  return array[0];
}

module.exports = head;