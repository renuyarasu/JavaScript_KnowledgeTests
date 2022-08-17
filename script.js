// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
// let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];
// let result =

// Test: 38 [December 21, 2021]

var obj = {
    prop: function () { },
    foo: 'bar',
};

var o = Object.seal(obj);
obj.foo = 'VedaGna';

Object.defineProperties(obj, 'foo', { get: function () { return 'g'; } });

obj.quaxxor = 'Yarasu';
delete obj.foo;

// Object.seal() method🔥

/* The Object.seal() method seals an object, preventing new properties from being added to the object and making all existing properties non-configurable. The values ​​of the exposed properties can still change as long as they remain writable.

By default, objects are extensible (new properties can be added to them). Sealing an object prevents new properties from being added to it and makes any existing properties non-configurable. It makes all properties of an object fixed and immutable. Marking all object properties as non-configurable also prevents them from being converted from data properties to access properties and vice versa, but does not prevent the value of data properties from changing. Attempts to remove or add properties to a sealed object, or convert data properties to access properties and vice versa, will fail, either silently or throwing a TypeError exception (usually, but not necessarily, this happens in strict mode). */