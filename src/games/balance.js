import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../common';

const digits = num => String(num).length;

const issorted = (num) => {
  for (let i = 0; i < digits(num) - 1; i += 1) {
    if (String(num)[i] > String(num)[i + 1]) {
      return false;
    }
  }
  return true;
};

const isbalanced = (num) => {
  if (!issorted(num)) {
    return false;
  }
  const difference = Number(String(num)[digits(num) - 1]) - Number(String(num)[0]);
  if (difference > 1) {
    return false;
  }
  return true;
};

const balancepair = (digit1, digit2) => {
  if (digit1 === digit2) { return (10 * digit1) + digit2; }
  if (digit1 > digit2) { return balancepair(digit2, digit1); }
  if (digit2 - digit1 === 1) { return (10 * digit1) + digit2; }
  return balancepair(digit1 + 1, digit2 - 1);
};

const balancenum = (num) => {
  if (isbalanced(num)) { return num; }
  if (digits(num) === 1) { return num; }
  const firstdigit = Math.floor(num / (10 ** (digits(num) - 1)));
  if ((firstdigit + digits(num)) - 2 === num % 10) {
    const oldfirst = firstdigit * (10 ** (digits(num) - 1));
    const newfirst = (num % 10) * (10 ** (digits(num) - 1));
    const notodered = ((num - oldfirst) - (num % 10)) + (newfirst + firstdigit);
    return balancenum(notodered);
  }
  const step = (numb) => {
    const pair = balancepair(Math.floor(numb / 10) % 10, numb % 10);
    const hundreds = Math.floor(numb / 100);
    if (hundreds > 0) {
      const lastpaired = (hundreds * 100) + pair;
      const tens = Math.floor(lastpaired / 10);
      const lastdigit = lastpaired % 10;
      if ((Math.floor(step(tens) % 10) + 2) === lastdigit) {
        return ((step(tens) * 10) + 10) + (lastdigit - 1);
      }
      return (step(tens) * 10) + lastdigit;
    }
    return pair;
  };
  return balancenum(step(num));
};

const balancegame = () => {
  rules('Balance the given number, please.');
  const balance = num => cons(`${num}`, balancenum(num));
  process(() => balance(randnum(10000)));
};

export default balancegame;
