#! /usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../index';

console.log('Welcome to the Brain Games!');
const gamer = hello();
console.log('Please answer "yes" if a number is even, otherwise answer "no".');
let i = 1;
for (; i < 4; i += 1) {
  const num = Math.round((1 - Math.random()) * 100);
  const answ = readlineSync.question(`${num}: `);
  const iseven = numb => (numb % 2 === 0) ? 'yes' : 'no';
  const rightansw = iseven(num);
  console.log(`right answer is ${rightansw}`);
  if (answ === rightansw) {
    console.log('Correct!');
  } else {
    console.log(`'${answ}' is a wrong answer. Correct answer is '${rightansw}'.\nLet's try again, ${gamer}!`);
    break;
  }
}
if (i === 4) {
  console.log(`You win! Congratulations, ${gamer}!`);
}
