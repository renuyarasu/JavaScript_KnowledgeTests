// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
// let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];

// Test: 33 [December 19, 2021]

for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1);
}

/* 
0
1
2
3
4
 */

for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1);
}

/* 
 */