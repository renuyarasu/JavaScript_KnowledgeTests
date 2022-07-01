// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 12 [November 12, 2021]

const compareCars = (car1, car2 = car) => {
    if (car1 !== car2) {
        console.log('Car 1 not equal to Car 2');
    } else {
        console.log('They are the same');
    }
}
const car = { name: 'BMW' };
compareCars(car) // They are the same

/* Explanation: 
Objects are passed by reference. When we test objects for strict equality ( === ), we compare their references. We set the default value for car2 to the car object and pass the car object as the value for car1.

This means that both values ​​have a reference to the same memory location , so they are equal.

The block of code in the else statement is run and printed to the console They are the same */


