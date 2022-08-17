// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
// let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];
// let result =

// Test: 43 [December 24, 2021]

const myObject = {
    log: ['A', 'B', 'C', 'D'],
    get latest() {
        if (this.log.length === 0) {
            return undefined;
        }
        return this.log[this.log.length - 1]
    }
}
console.log(myObject.latest); // D

// getter 🔥
/* 
The get syntax associates a property of an object with a function that will be called when that property is accessed.

Sometimes it is desirable to allow access to a property that returns a dynamically calculated value, or you may want to reflect the state of an internal variable without the need for explicit method calls. In JavaScript, this can be done using a getter.

It is not possible to have a getter bound to a property and have that property actually contain a value at the same time, although it is possible to use a getter and setter in combination to create a pseudo-property type.

An example is shown in the picture. */