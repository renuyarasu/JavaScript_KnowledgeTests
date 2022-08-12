// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
// let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];

// Test: 24 [December 14, 2021]

// Object.defineProperty method 🔥

let obj = {};

Object.defineProperty(obj, 'a', {
    value: 37,
    writable: true,
    enumerable: true,
    configurable: true
});

let bValue = 38;

Object.defineProperty(obj, 'b', {
    get: function () { return bValue },
    set: function (newValue) { bValue = newValue },
    enumerable: true,
    configurable: true
})

console.log(obj); // { a: 37, b: [Getter/Setter] }



/* 

Object.defineProperty method 🔥

The Object.defineProperty() method defines a new property or modifies an existing property directly on an object, returning that object.

This method allows you to precisely add or change the properties of an object. Normal property addition via assignment creates properties that can be seen via property enumeration (using a for...in loop or the Object.keys method), whose values ​​can be changed and which can be removed. The same method allows you to customize these additional property details.

Property descriptors found on objects are of two basic types: data descriptors and access descriptors. A data descriptor is a property that has a value, which may or may not be writable. An access descriptor is a property described by a pair of functions - a getter and a setter. A handle can only be one of these two types; it cannot be both at the same time.

Both the data descriptor and the access descriptor are objects.
*/