const assertEqual = function(actual, expected) {
//console.log('This is actual:' +  actual);
//console.log('This is expected:' + expected);
  if (actual === expected) {
    console.log('🦖🦖🦖 Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('🤬🤬🤬 Assertion Failed: ' +  actual + ' !== ' + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('Peace of cake', 'Peace of cake');
assertEqual(33, 33);
assertEqual(33, 11 * 3);
assertEqual(1, 2);