import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../index';

const countgcd = (num1, num2) => {
  if (num1 > num2) { return countgcd(num1 - num2, num2); }
  if (num1 < num2) { return countgcd(num1, num2 - num1); }
  return num1;
};

const gcdgame = () => {
  rules('Please find the greatest common divisor of given numbers.');
  const gcd = (firstnum, secondnum) => cons(`${firstnum} ${secondnum}`, countgcd(firstnum, secondnum));
  process(() => gcd(randnum(100), randnum(100)));
};

export default gcdgame;
