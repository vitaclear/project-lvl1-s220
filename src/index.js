import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Enter your name, please: ');
  console.log(`Hello, ${name}!`);
  return `${name}`;
};

export const rules = (rule) => {
  console.log(`${rule}`);
};

export const randnum = n => Math.round((1 - Math.random()) * n);

export const process = (task) => {
  let correctAnswer;
  const gamer = hello();
  let i = 1;
  for (; i < 4; i += 1) {
    const value = task();
    const answ = readlineSync.question(`${car(value)}: `);
    if (cdr(value) === true) {
      correctAnswer = 'yes';
    } else if (cdr(value) === false) {
      correctAnswer = 'no';
    } else { correctAnswer = String(cdr(value)); }
    if (answ === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answ}' is a wrong answer. Correct answer is '${correctAnswer}'.\nLet's try again, ${gamer}!`);
      break;
    }
  }
  if (i === 4) {
    console.log(`You win! Congratulations, ${gamer}!`);
  }
};
