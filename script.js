// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 16 [October 20, 2021]
// Think about what will be printed to the console after the program is executed.

function check_age(age) {
    if (age < 18) {
        var message = 'Boy!'
    } else {
        var message = 'Men!'
    }
    return message;
}
console.log(check_age(35)); // Men!