// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
// let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];

// Test: 30 [December 17, 2021]

// includes() method

const myArray = [1, 2, 3];
console.log(myArray.includes(2)); // true
console.log(myArray.includes(5)); // false


let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];
console.log(fruits.includes('Avocado')); // true
console.log(fruits.includes('berries')); // false



/* 
The includes() method determines whether an array contains a particular element, returning true or false depending on that.

Options:
1) searchElement - the search element.
2) fromIndex - optional
The position in the array at which to start searching for the searchElement element. For negative values, the search is performed starting from the array.length + fromIndex index in ascending order. The default value is 0.

An example of how the method works is shown in the picture. */