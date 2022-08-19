// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
/* 
let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];
let result =
console.log(result); 
*/

// Test: [December 26, 2021]

// Object.defineProperties()

Object.defineProperties(obj, {
    'property_01': {
        value: true,
        writable: true,
    },
    'property_02': {
        value: 'Hello',
        writable: false,
    }
})

/* The Object.defineProperties() method defines new or modifies existing properties directly on an object by returning that object.

Options:
obj - an object on which new properties are defined or existing properties are changed.
props is an object whose own enumerable properties are descriptors for properties that are created or changed. Property descriptors have the following additional keys:
configurable is true only if the type of this property descriptor can be changed and if the property can be removed from its containing object.
The default value is set to false.
The default value is set to false.
value - the value associated with the property. Can be any valid JavaScript value (number, object, function, etc.).
The default value is set to undefined.*/