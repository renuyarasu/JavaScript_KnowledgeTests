// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();

// Test: 07 [December 04, 2021]

const data = {
    result: 0,
    numbers: [1, 2, 3, 4, 5],
    computeResult() {
        const addAll = () => {
            return this.numbers.reduce((total, cur) => total + cur, 0);
        }
        this.result = addAll()
    }
}
data.computeResult();
console.log(data.result); // 15
