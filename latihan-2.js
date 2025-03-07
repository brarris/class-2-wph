'use strict';
// soal 2

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

// soal 3

let age = 19;
let isStudent = true;

if (age <= 18 || !isStudent) {
  // tanda seru (!) mengembalikan nilai true menjadi false (sebalik nya jika false menjadi true)
  console.log('Remaja');
} else {
  console.log('Dewasa');
} // ini kodingan OR, bagaimana jika menggunakan AND? dan diawal itu remaja

let i = 0;
while (i < 3) {
  // console.log(i);
  i++;
}

for (let i = 0; i <= 5; i++) {
  console.log(i);
}
