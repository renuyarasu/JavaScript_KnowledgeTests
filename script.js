// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 13 [November 13, 2021]

console.log(0 || "" || 2 || undefined || true || false); // 2

/* Explanation: 
Logical operator  ||  performs the following actions:

Evaluates operands from left to right.
Each operand converts to a boolean value. If the result is  true , stops and returns the original value of this operand.
If all operands are false ( false ), returns the last one.
In our case, the highest operand will be displayed as true , i.e. 2 */


