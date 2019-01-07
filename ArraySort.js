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
    '0,0,0,5,0,3,2,3',
    // This is the first line from the test.
    // This is the second line from the test.
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let numbers = gets().split(",").map(Number);
let zeroes = [];
let nonZeroes = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
        zeroes.push(numbers[i]);
    }
    else{
        nonZeroes.push(numbers[i]);
    }
    
}

let result = nonZeroes.concat(zeroes);
print(result);