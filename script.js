// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 11 [December 06, 2021]

let array_01 = [1, 2, [3, 4]];
console.log(array_01.flat()); // [ 1, 2, 3, 4 ]



let array_02 = [1, 2, [3, 4, [5, 6]]];
console.log(array_02.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]



let array_03 = [1, 2, [3, 4, [5, 6]]];
console.log(array_03.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]



let array_04 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(array_04.flat(Infinity)); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]




/* 
flat 🔥 method

The flat() method returns a new array in which all elements of the nested subarrays have been recursively "raised" to the specified depth level.

Consider the example in the picture. In the first two cases, the subarrays go up one level, so we reduce the number of nested arrays by one. In the third case, we already raise two levels and get rid of both arrays. If you need to get rid of all subarrays, then inside the brackets you need to pass Infinity (infinity). In this case, all subarrays will be removed. */