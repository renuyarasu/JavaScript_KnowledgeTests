// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 20 [October 26, 2021]
// Think about what will be printed to the console after the program is executed.



const set = new Set();
set.add(3);
set.add('JavaScript ');
set.add({ url: 'https://telegra.ph/Zadacha-JS-10-26-2' });

for (let item of set) {
    console.log(item + 2);
}

/* 
Explanation: https://telegra.ph/Zadacha-JS-10-26-2

1) 3 + 2 = 5
2) JS tests is a string, so concatenation happens . Get string Tests JS2
3) { url: "@javascript_tests" } - object. The object is not a string, so it is cast to a string, and when we cast a normal object to a string, it becomes [object Object] . 
    Next , we concatenate already with the string "2" and get [object Object]2
*/
