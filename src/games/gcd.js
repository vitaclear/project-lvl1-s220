import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../common';

const countgcd = (num1, num2) => {
  if (num1 % num2 === 0) { return num2; }
  if (num2 % num1 === 0) { return num1; }
  if (num1 < num2) {
    for (let i = Math.ceil(num1 / 2); i > 0; i -= 1) {
      if (num1 % i === 0) {
        if (num2 % i === 0) {
          return i;
        }
      }
    }
  }
  return countgcd(num2, num1);
};

const gcdgame = () => {
  rules('Please find the greatest common divisor of given numbers.');
  const rightansw = expression => String(expression);
  const gcd = (firstnum, secondnum) => cons(`${firstnum} ${secondnum}`, countgcd(firstnum, secondnum));
  process(() => gcd(randnum(100), randnum(100)), rightansw);
};

export default gcdgame;
