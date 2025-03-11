'use strict';

// Question 1

const soal1 = '5' - 2; // 3
const soal2 = '5' + 2; // 52 (string)
const soal3 = true + false; // 1 (true)
const soal4 = 10 / '2'; // 5 (number)
const soal5 = '10' == 10; // true

console.log(soal1, soal2, soal3, soal4, soal5);

// Question 2

let x = 10;
let y = 8;
let a = 6;
let b = 4;

let sum = x + y;
let difference = x - a;
let product = a * b;
let quotient = x / b;

let isEqual = x === y;
let isGreater = x > a;
let isLessOrEqual = b <= y;

// console.log(sum, difference, product, quotient);
// console.log(isEqual, isGreater, isLessOrEqual);

// Question 3

let age = 19;
let isStudent = false;

if (age > 18 && !isStudent) {
  console.log('Dewasa');
} else if (age <= 18 || isStudent) {
  console.log('Remaja');
}
