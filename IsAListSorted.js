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
    '2, 3, 1, 5, 6',
    // This is the first line from the test.
    // This is the second line from the test.
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let n = +gets();
 for (let i = 0; i < n; i++) {
    let array = gets();
    let array2 = array.split(',').map(Number).sort((x, y) => x > y).toString();
    print(array.toString() == array2.toString());
 }