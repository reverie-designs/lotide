const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
assertArraysEqual([1, 2, 3], [1, 2, 4]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, '3'], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3], [1, '2', '3']);
assertArraysEqual([4, -27, 333], [4, -27, 333]);