// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
// let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];

// Test: 32 [December 18, 2021]

const myObject = {
    name: 'VedaGna',
    age: 4,
    year: 2015
};
const copy = Object.assign({}, myObject)
console.log(copy); // { name: 'VedaGna', age: 4, year: 2015 }


// Object.assign() method 🔥

/* The Object.assign() method is used to copy the values ​​of all native enumerable properties from one or more source objects to the target object. After copying, it returns the target object.

The Object.assign() method copies only enumerable and native properties from source objects to the target object. It uses the [[Get]] internal method on the source objects and the [[Set]] internal method on the target object, so it also calls getters and setters. That's why it assigns properties instead of just copying or defining new properties. This behavior can make a method unsuitable for injecting new properties into a prototype if the source objects being infused contain getters. Instead, you should use the Object.getOwnPropertyDescriptor() and Object.defineProperty() methods to copy property definitions to prototypes, including their enumerability.

An example of how the method works is shown in the picture. */