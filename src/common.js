import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import hello from './index';

const gamer = hello();

export const rules = (rule) => {
  console.log(`${rule}`);
};

export const randnum = n => Math.round((1 - Math.random()) * n);

export const process = (task, rightanswer) => {
  let i = 1;
  for (; i < 4; i += 1) {
    const value = task();
    const answ = readlineSync.question(`${car(value)}: `);
    console.log(`!!!!!! ${answ}, ${rightanswer(cdr(value))}`);
    if (answ === rightanswer(cdr(value))) {
      console.log('Correct!');
    } else {
      console.log(`'${answ}' is a wrong answer. Correct answer is '${rightanswer(cdr(value))}'.\nLet's try again, ${gamer}!`);
      break;
    }
  }
  if (i === 4) {
    console.log(`You win! Congratulations, ${gamer}!`);
  }
};
