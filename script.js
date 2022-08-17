// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
// let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];

// Test: 36 [December 20, 2021]

function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false
        }
    }
    return element > 1
}
console.log([4, 6, 8, 12].find(isPrime)); // undefined
console.log([4, 10, 8, 7].find(isPrime)); // 7
console.log([4, 10, 8, 7].findIndex(isPrime)); // 3

// find() method 🔥
/* 
The find() method returns the value of the first element found in the array that satisfies the condition passed to the callback function. Otherwise, undefined is returned.

The find method invokes the passed callback function once for each element present in the array until it returns true. If such an element is found, the find method will immediately return the value of that element. Otherwise, the find method will return undefined.

The callback function is called with three arguments: the value of the element, the index of the element, and the array to be traversed.

If the thisArg parameter was passed to the find method, it will be used as the this value when calling callback . Otherwise, undefined will be used as the this value. */