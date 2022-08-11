// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 13 [December 07, 2021]

let animals = ['Tiger', 'Lion', 'Elephant', 'Leopard', 'Tiger', 'Lion', 'Elephant', 'Leopard'];

console.log(animals.lastIndexOf('Elephant')); // 6
console.log(animals.lastIndexOf('Tiger')); // 4

/* 
lastIndexOf method 🔥

The lastIndexOf() method returns the last index at which the given element can be found in the array, or -1 if there is no such index. The array is searched from end to beginning, starting at index fromIndex.

The lastIndexOf() method compares the element being searched for, searchElement, with the elements in the array using strict comparison (the same method used by the === operator, triple equals).

The method can take two parameters:
1) searchElement - the search element in the array.
2) fromIndex (optional) - the index from which to start searching backwards.*/