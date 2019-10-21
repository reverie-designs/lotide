const assertEqual = require('../assertEqual');
const tail = require('../tail');

let testArray = ['light', 'cat', 'dog'];
tail(testArray);
console.log(testArray);
assertEqual(testArray.length, 3);
let singleItemArray = ['kitten'];
tail(singleItemArray);
assertEqual(singleItemArray.length, 1);