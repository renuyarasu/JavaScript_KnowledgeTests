// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 17 [December 09, 2021]

let myArray = ['JavaScript', 'Knowledge', 'Tests'];
console.log(Object.keys(myArray)); // [ '0', '1', '2' ]


let myObject = { 0: 'JavaScript', 1: 'Knowledge', 2: 'Tests' };
console.log(Object.keys(myObject)); // [ '0', '1', '2' ]


let myObject_keys = { 99: 'JavaScript', 55: 'Knowledge', 33: 'Tests' };
console.log(Object.keys(myObject_keys)); // [ '33', '55', '99' ]


let my_object = Object.create({}, {
    getFoo: { value: function () { return this.foo; } }
});
my_object.foo = 1;
console.log(Object.keys(my_object)); // [ 'foo' ]


/* 
Object.keys method 🔥

The Object.keys() method returns an array of the passed object's own enumerable properties, in the same order that they would be traversed by a for...in loop (the difference between a loop and a method is that the loop enumerates properties from the prototype chain as well).

The Object.keys method returns an array of string elements corresponding to the enumerable property names found directly on the object itself. The order of the properties is the same as when manually listing the properties in an object through a loop.

In ES5, if a method argument is not an object (it is a primitive value), a TypeError exception will be thrown. In ES2015, such an argument will be cast to an object.
 */