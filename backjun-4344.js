/*
백준 4344
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
*/

const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
console.log(input);
input = input.split('\n');
console.log(input);

const testCaseNum = +input[0]; // +연산자를쓰면 number형으로 바꿔준다, 또는 Number(input[0]) 으로도 가능하다
for (let i=1; i <= testCaseNum; ++i) {
    const arr = input[i].split(' ').map((item) => +item);

    let totalSum = 0;
    const arrLength = arr[0];
    for(let i=1; i <= arrLength; ++i) {
        totalSum += arr[i];
    }
    
    const average = totalSum / arrLength;

    let goodStudent = 0;
    for (let i=1; i <= arrLength; ++i) {
        if(arr[i] > average) {
            goodStudent++;
        }
    }

    const ans = ((goodStudent / arrLength) * 100).toFixed(3);
    console.log(ans + '%');
}

function solution(C, testCase) {
    let answer = 0;

    return answer;
}