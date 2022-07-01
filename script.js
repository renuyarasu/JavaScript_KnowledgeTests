// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 17 [November 17, 2021]

const arr = [0, 5, 10];
const func = value => value + 10;

for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
}
console.log(arr);

/* Explanation: 
There is a small trick to this problem. The func function increments the passed value by 10, but we do not redefine the elements of the arr array in the loop. Thus, the original array is output.*/


