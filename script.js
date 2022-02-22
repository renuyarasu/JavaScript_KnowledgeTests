// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 06

function x() {
    console.log(this.name);
}
x = x.bind({ name: 'VedaGna' }).bind({ name: 'Yarasu' });

x(); // VedaGna