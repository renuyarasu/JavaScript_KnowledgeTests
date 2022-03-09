// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 18 [October 24, 2021]
// Think about what will be printed to the console after the program is executed.

let a = [1, 2, 3];
let b = [1, 2, 3];
let result = (a == b);
console.log(result); // false

/* 
Explanation:
The arrays are  not  equal, although they are the same  in content. This is because JavaScript stores two references to two places in RAM. 
A different place in memory means the  arrays are different . 
*/
