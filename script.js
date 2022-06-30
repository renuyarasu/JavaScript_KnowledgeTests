// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 06[November 06, 2021]

function a(val) {
    return true - val;
}
let sum = a('10') + a('-10') + a('-10') + a('10');
console.log(sum); // 4

/* 
Explanation:

Inside the function there is a '-' sign, which means that when calculations occur, it will convert to a number:

true --> 1

'10' --> 10

'-10' --> -10

And then the usual mathematical calculations. */


