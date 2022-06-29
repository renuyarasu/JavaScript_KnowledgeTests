// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 21 [October 27, 2021]

const func = ({ a, b, c }) => {
    console.log(a, b, c);
};
func(1, 2, 3) // undefined undefined undefined

/* 
Explanation:
In the parameters of the arrow function, we pass an object with fields a, b and c. And we are trying to display the variables a, b and c , 
which are not declared, so we get undefined 3 times. */

