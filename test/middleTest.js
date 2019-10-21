const middle = require('../middle');
const assertArrayEqual = require('../assertArraysEqual');

//middle([1,2,9,8,7,9,10,11,12]); //7
//middle([1, 2, 3, 4, 5, 6]); //[3,4]
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);