// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
// let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];

// Test: 22 [December 12, 2021]

function isBigEnough(element, index, array) {
    return element >= 10;
}
console.log([11, 22, 55].every(isBigEnough)); // true
console.log([1, 5, 9].every(isBigEnough)); // false


/* 

every 🔥 method

The every() method checks if all elements of the array satisfy the condition specified in the passed function.

The every() method invokes the passed callback function once for each element present in the array until it finds one for which callback returns false (a value that becomes false when cast to Boolean). If such an element is found, the every() method will immediately return false. Otherwise, if the callback returns true for all array elements, the every() method will return true. The callback function is called only for array indexes that have values ​​assigned; it is not called for indexes that have been dropped or have never been assigned a value.

The callback function is called with three arguments: the element's value, the element's index, and the array to be traversed.

The every() method does not change the array it was called on.
*/