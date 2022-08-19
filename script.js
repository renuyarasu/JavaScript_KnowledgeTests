// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
/* 
let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];
let result =
console.log(result); 
*/

// Test: [December 26, 2021]

// URIError

try {
    decodeURIComponent('%');
} catch (e) {
    console.log(e instanceof URIError); // true
    console.log(e.message); // URI malformed
    console.log(e.name);
    console.log(e.fileName);
    console.log(e.lineNumber);
    console.log(e.columnNumber);
    console.log(e.stack);
}


/* The URIError object represents an error that occurs when the global URI handling functions are used incorrectly.

A URIError exception is thrown when an invalid URI is passed to global URI handling functions.

Options:
message is an optional parameter. A human-readable description of the error.
fileName is an optional parameter. The name of the file containing the code that caused the exception.
lineNumber is an optional parameter. The line number of the code that caused the exception. */