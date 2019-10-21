const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", ()=>{
  it('array1 of numbers is equal to array 2 of same numbers returns true', ()=>{
    let array1 =[1, 2, 3];
    let array2 = [1, 2, 3];
    assert.deepEqual(eqArrays(array1, array2), true);
  });
  it('array1 with numerical values is equal to array 2 with reversed numerical values returns false', ()=>{
    let array1 =[1, 2, 3];
    let array2 = [3, 2, 1];
    assert.deepEqual(eqArrays(array1, array2), false);
  });
  it('array1 with string values is equal to array 2 with same string values returns true', ()=>{
    let array1 =["1", "2", "3"];
    let array2 = ["1", "2", "3"];
    assert.deepEqual(eqArrays(array1, array2), true);
  });
});