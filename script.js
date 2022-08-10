// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 27 [November 27, 2021]
const myArray = [-3, -2, -1, 0, 1, 2, 3, 4, 5];
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0);
        return false
    }
    return num > 1;
}

let result = myArray.filter(isPrime);
console.log(result); // [2]