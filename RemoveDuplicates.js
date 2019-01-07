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
    '1,2,2,2,2,18,3,12',
    // This is the first line from the test.
    // This is the second line from the test.
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let numbers = gets().split(",");
let result = [];

for (let i = 0; i < numbers.length; i++) {
    if (result.includes(numbers[i])) {
        continue;
    }
    else{
        result.push(numbers[i]);
    }
}
print(result);