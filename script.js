// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 18 [November 18, 2021]

let a = 10;
if (a >= 3) {
    let a = 5;
}
const b = a;
console.log(b); //10


/* Explanation: 
Inside the if block, we have created a local variable a , which will only be available inside this block. For Js these variables are different so it won't override the first a. Therefore, in b we will write the value of the variable a, which is declared outside the if block, ie ten */


