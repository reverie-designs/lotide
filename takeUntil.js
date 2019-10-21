
const takeUntil = function(array, callback) {
  let newArray =[];
  for (item of array) {
    if (callback(item) == false) {
      newArray.push(item);
    } else {
      break;
    }
  }  
 return newArray;
};
module.exports = takeUntil;
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArrayEqual(results1,[ 1, 2, 5, 7, 2 ]);
// //console.log(results1);
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArrayEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
// //console.log(results2);
