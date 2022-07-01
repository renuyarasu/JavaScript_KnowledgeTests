// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 16 [November 16, 2021]

console.log(path); // ReferenceError: Cannot access 'path' before initialization
let path = '/img/logo.png'

/* Explanation: 
console.log does not see the path variable, because it hasn't been declared yet, so it throws an error .

If the path variable were declared using the var keyword, then the answer would be undefined. It has to do with scope. */


