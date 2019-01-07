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
    '2,1,3,4',
    '2'
    // This is the first line from the test.
    // This is the second line from the test.
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let numbers = gets().split(",").map(Number);
let n = +gets();
let count = n;
let result = "";


if(n > numbers.length){
   count = n % numbers.length;
}
let tempElement = 0;

for (let i = 0; i < count; i++) {
   tempElement = numbers.shift();
   numbers.push(tempElement);
}

print(numbers.join(","));