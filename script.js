// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 03 [November 03, 2021]

console.log(Number(2) === Number(2)); // true
console.log(Boolean(false) === Boolean(false)); // true
console.log(Symbol('foo') === Symbol('foo')); // false 

/* 
Explanation:

Each Symbol is completely unique . The purpose of the argument passed to Symbol‚ is to give the Symbol a description. The Symbol value does not depend on the passed argument. When we check for equality, we create two brand new Symbols : the first Symbol('foo') and the second Symbol('foo') . The two values ​​are unique and not equal to each other, Symbol('foo') === Symbol('foo') returns false. */


