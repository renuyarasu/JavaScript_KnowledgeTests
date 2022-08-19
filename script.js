// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
/* 
let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];
let result =
console.log(result); 
*/

// Test: 47 [December 26, 2021]

// TypeError 🔥

try {
    null.f();
} catch (e) {
    console.log(e instanceof TypeError); // true
    console.log(e.message);  
    console.log(e.name); // TypeError
    console.log(e.fileName);  
    console.log(e.lineNumber);  
    console.log(e.columnNumber); 
    console.log(e.stack);  
}
/* The TypeError object represents the error that occurs when a value is not of the expected type.

A TypeError exception is thrown when an operand or argument passed to a function is not compatible with the type expected by the operator or function.

The global TypeError object does not contain any methods of its own, however, it does inherit some methods from the prototype chain.

An example of work is shown in the picture. */