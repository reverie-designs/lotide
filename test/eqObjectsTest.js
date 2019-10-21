const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", ()=>{

  it('{a:1} equals {a:1} returns true', ()=> {
    let obj1 = {a:1};
    let obj2 = {a:1};
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it('{a:1, b: 2} equals {b:2, a:1} returns true', ()=> {
    let obj1 = {a:1, b: 2};
    let obj2 = {b:2, a:1};
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it('{a:1, b: 2} does not equal { a: "1", b: "2", c: "3" } returns false', ()=> {
    let obj1 = { a: "1", b: "2" };
    let obj2 = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });
});