import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../common';

const digits = num => String(num).length;
const sumdigits = (num) => {
  let sum = 0;
  for (let i = String(num).length; i > 0; i -= 1) {
    sum += Number(String(num)[i - 1]);
  }
  return sum;
};

const getbalanced = (num) => {
  let result = '';
  const rest = sumdigits(num) % digits(num);
  for (let k = 0; k < digits(num) - rest; k += 1) {
    result += String((sumdigits(num) - rest) / digits(num));
  }
  for (let k = digits(num) - rest; k < digits(num); k += 1) {
    result += String(((sumdigits(num) - rest) / digits(num)) + 1);
  }
  return result;
};

const balancegame = () => {
  rules('Balance the given number, please.');
  const rightansw = expression => String(expression);
  const balance = numb => cons(`${numb}`, getbalanced(numb));
  process(() => balance(randnum(10000)), rightansw);
};

export default balancegame;
