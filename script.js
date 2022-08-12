// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
// let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];

// Test: 27 [December 15, 2021]

// copyWithin method 
console.log([1, 2, 3, 4, 5].copyWithin(0, 3)); // [ 4, 5, 3, 4, 5 ]
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [ 4, 2, 3, 4, 5 ]
console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1)); // [ 4, 2, 3, 4, 5 ]



/* 
The copyWithin() method copies the sequence of array elements within it to a position starting at index target. The copy is taken at the indexes given by the second and third arguments start and end. The end argument is optional and defaults to the length of the array.

The target, start, and end arguments are cast to Number and truncated to integer values.

If the start argument is negative, it is treated as length+start where length is the length of the array. If the end argument is negative, it is treated as length+end.

The copyWithin function is intentionally generic, it doesn't require the this value inside it to be an Array object, and besides, the copyWithin function is a mutating method, it will change the this object and return it, not just return a copy. */