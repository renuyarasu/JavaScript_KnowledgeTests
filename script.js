// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
// let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];
// let result =

// Test: 44 [December 25, 2021]

let check = function (num) {
    if (num < MIN || num > MAX) {
        throw new RangeError('VedaGna ' + MIN + 'Yarasu ' + MAX);
    }
};
try {
    check(500);
}
catch (e) {
    if (e instanceof RangeError) {

    }
}
// RangeError 🔥
/* 
A RangeError object represents an error that occurs when a value is not in the set or is out of range.

A RangeError exception is thrown when an attempt is made to pass a number as an argument to a function that is not within the valid range of the function's argument. It can occur when creating an array with the wrong length through the Array constructor, or when passing bad values ​​to the number methods Number.toExponential(), Number.toFixed(), or Number.toPrecision().

The global RangeError object does not contain any methods of its own, however, it does inherit some methods from the prototype chain.

An example of work is shown in the picture. */