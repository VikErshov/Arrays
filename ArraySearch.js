const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

// This is the place where you must place your test data
const test = [
    '1,1,1,1,1,1,1,1',
    // This is the first line from the test.
    // This is the second line from the test.
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let numbers = gets().split(',').map(Number).sort();
let staticArray = [];
let result = [];

for (let i = 1; i <= numbers.length; i++) {
    staticArray.push(i);
}

for (let i = 1; i <= staticArray.length; i++) {
    if (numbers.includes(i)) {
        continue;
    }
    result.push(i)
}
print(result);