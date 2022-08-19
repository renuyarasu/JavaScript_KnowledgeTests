// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
/* 
let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];
let result =
console.log(result); 
*/

// Test: [December 26, 2021]

// Date

let today = new Date();
console.log(today); // 2022-08-19T02:24:33.513Z
let birthday = new Date('Friday, 19 August 2022 (IST)'); // 2022-08-18T18:30:00.000Z
console.log(birthday);

/* Creates an instance of a Date object representing a point in time. The Date object contains the number of milliseconds since January 1, 1970 UTC

If no arguments were passed, the constructor creates a Date object for the current date and time, according to the system settings.

If at least two arguments are passed, the missing arguments are set to the starting values ​​of day of month 1 and time of midnight.

The Date object provides generic behavior across all platforms. A time value can be passed between systems to represent the same point in time and, if used to create a local date object, will reflect the local time equivalent.

An example of work is shown in the picture.*/