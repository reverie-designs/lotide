
const countOnly = function(allItems, itemsToCount) {
  const results={};
  for (const item of allItems){ //loops through firstNames array
    console.log(item);
    if (itemsToCount[item]){ //if object has key name as firstName array
      if (results[item]) { // if result has a key name as first name array 
        results[item] += 1; // if result with the key item already exists add one to existing value
      } else {
        results[item] = 1; // if result with the key item doesn't exit asign item as key and give it value of one
      }
    }
  }
  return results;
}; 

module.exports = countOnly;
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ]; // closes array firstNames

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1); // jason only occurs once
// assertEqual(result1["Karima"], undefined); // kariima is not present
// assertEqual(result1["Fang"], 2); //fang repeats twice