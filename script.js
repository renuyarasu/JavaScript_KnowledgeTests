// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 19 [October 25, 2021]
// Think about what will be printed to the console after the program is executed.


function getItems(carList, ...args, favCar) {
    return [...carList, ...args, favCar]
}

let result = getItems(['Lada', 'Audi'], 'Tata', 'BMW');
console.log(result); // SyntaxError: Rest parameter must be last formal parameter

/* 
Explanation: https://telegra.ph/Zadacha-JS-10-25-2
...args is an array containing all remaining arguments and can only be passed last! In this example, other parameters were the second parameter, not the last . 
This will result in a syntax error.
*/
