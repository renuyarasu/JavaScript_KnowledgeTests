// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 08 [November 08, 2021]

const obj = { number: 5 };

const func = (x = { ...obj }) => {
    console.log(x.number *= 3);
}
func() // 15
func() // 15
func(obj) // 15
func(obj) // 45

/* 
Explanation:

In this example, arr is an arrow function that takes x and returns (x, 0, 1, 2). The comma operator is also used here.

The comma operator   executes each of its operands (from left to right) and returns the value of the last operand. Therefore, the last value will be returned , ie 2. */


