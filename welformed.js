const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
input = input.split('\n');
const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; ++i) {
    const arr = input[i].split(' ').map((item) => +item);
    const newArr = [];
    for(let i=1; i <= arr[0]; ++i) {
        newArr.push(arr[i]);
    }
    const testCase = {
        N: arr[0],
        arr: newArr,
    };
    inputTestCase.push(testCase);
}

function solution(C, testCase) {
    console.log('C : ',C);
    console.log('testCase : ', testCase);
}

solution(inputC, inputTestCase);