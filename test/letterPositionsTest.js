const assert = require('chai').assert;
const letterPositions = require('../letterPositions');
let words = "lighthouse in the house";
describe("#letterPositions", ()=>{
  
  it('returns an array of 1 for the letterPositions(hello)[e]', ()=>{
    assert.deepEqual(letterPositions('hello')['e'], [1]);
  });

  it('returns array of values [3, 5, 15, 18] of the letter h inside the words for the letterPositions(lighthouse in the house)[h]', ()=>{
    assert.deepEqual(letterPositions(words)['h'], [3, 5, 15, 18]);
  });
});