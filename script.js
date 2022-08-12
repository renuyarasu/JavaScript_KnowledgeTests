// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
// let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];

// Test: 26 [December 14, 2021]

// concat method 

let x = ['a', 'b', 'c'];
let y = ['d', 'e', 'f'];
let z = x.concat(y);

console.log(z); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
/* 
The concat() method returns a new array consisting of the array it was called on, concatenated with other arrays and/or values ​​passed as arguments.

The concat method creates a new array consisting of the elements in the object it was called on, followed in order, for each argument, by all of its elements (if the argument is an array), or the argument itself (if it is not an array).

The concat method does not modify this array or any of the arrays passed as arguments, but instead returns a shallow copy containing copies of those elements that were concatenated with the original arrays.
 */