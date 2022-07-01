// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 11 [November 11, 2021]

let i = 10;
const addTwo = x => x + 2;
i = (i++, i = addTwo(i), i *= 3, i += 8, i -= 6);
console.log(i); // 41

/* Explanation: 
First we increment the value of i to 11 , then we call the addTwo(2) function and assign the result to the new value, i becomes 13 . After that we multiply the current value of i by 3 , the updated value of i will be 39 . Then we increment the value of i by 8, now the value will be 47 . And finally, we subtract 6 from i and the updated value will be 41. */


