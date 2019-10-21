const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
let results = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true });

describe("#countOnly", () => {
  it("returns 1 for 'Jason'", ()=>{
    assert.strictEqual(results["Jason"], 1);
  });
  it("returns 2 for 'Fang'", ()=>{
    assert.strictEqual(results["Fang"], 2);
  });
  it("returns undefined for 'Karima'", ()=>{
    assert.strictEqual(results["Karima"], undefined);
  });
});