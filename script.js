// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 22 [October 28, 2021]

function nums(a, b) {
    if (a > b) {
        console.log('a > b');
    }
    else {
        console.log('a < b');
    }
    return a + b;
}
console.log(nums(6, 3));
console.log(nums(2, 4));

/* 
Explanation:
In JavaScript, we don't have to explicitly specify ; at the end of each line, however the JS engine still adds them after the statements. For example, statements can be variables or keywords such as throw, return, break , etc.

In the example, we wrote the return statement and a + b on a new line. The engine automatically adds ; to return. So return will always return undefined . Note that there is no automatic insert after if/else . */