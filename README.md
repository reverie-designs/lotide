# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dfrumovitch/lotide`

**Require it:**

`const _ = require('@dfrumovitch/lotide);`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: function returns the first element within an array
* `tail(array)`: function returns the tail end of an array except for the first element without changing original array
* `middle(array)`: function that takes in an array and finds the middle - if amount of arrays in element is odd return the single middle value in an array, if even return the two middle values of an array
* `flatten(array)`: function takes in an array and if it has other arrays in it - it flattens it into a single array
* `letterPositions(string)`: function takes in a string and returns an object with the key of letters and the value of their position in the string
* `map(array)`: function that creates a new array of values from and old array of values that passes through a callback function
* `countLetters(string)`: function takes in a string and returns an object with the key of letters and the value of repeated letters in the given string
* `countOnly(array)`: function takes in an array and the value that we are looking for and returns the amount of times that value appears in the array
* `findKey(object, value)`: function takes in an object and a call back function returns the first key(object property) for which the callback returns a true
* `findKeyByValue(array)`: function that takes in an object and a value and returns the key of that value
* `takeUntil(array, callback)`: function that takes in an array and a call back function and slices and return a new array at the point when call back function returns true
* `without(array, value to remove)`: function that removes a single value from an array according to a specified parametere