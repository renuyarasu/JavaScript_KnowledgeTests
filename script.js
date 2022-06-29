// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 22 [October 29, 2021]

let n = 7;
javascript_tests:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue javascript_tests
    }
    console.log(i); 
    /* 
    2
3
5
7 */
}