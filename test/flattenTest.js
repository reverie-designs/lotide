const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", ()=>{
  it('[1]will return[1]', ()=>{
    let input = [1];
    let expected = [1];
    assert.deepEqual(flatten(input), expected);
  });
  it('[1]will return[1]', ()=>{
    let input = [1, 2, [3, 4], 5, [6]];
    let expected =[1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(input), expected);
  });
});