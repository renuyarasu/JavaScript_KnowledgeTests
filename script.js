// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 07

function Car(companyName, model) {
    this.companyName = companyName;
    this.model = model;
}

const opel = Car('Opel', 'Astra');
const bmw = new Car('BMW', 'X5');

console.log(opel); // undefined
console.log(bmw); // Car { companyName: 'BMW', model: 'X5' }