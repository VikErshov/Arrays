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
    '0,1,-1',
    // This is the first line from the test.
    // This is the second line from the test.
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let numbers = gets().split(',').map(Number);
let averageCount = 0;
let aboveAverage = [];
let belowAverage = [];

for (let i = 0; i < numbers.length; i++) {
    averageCount += numbers[i];
}
averageCount = averageCount / numbers.length;
print(`avg: ${averageCount.toFixed(2)}`);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === averageCount) {
        continue;
    }
    if (numbers[i] > averageCount) {
        aboveAverage.push(numbers[i]);
    }
    else{
        belowAverage.push(numbers[i]);
    }
}
print(`below: ${belowAverage}`);
print(`above: ${aboveAverage}`);
