import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../common';

const digits = num => String(num).length;

const getdigit = (num, k) => Math.floor(num / (10 ** (digits(num) - (k + 1)))) % 10;

const isbalanced = (num) => {
  for (let i = 0; i < digits(num) - 1; i += 1) {
    const digit1 = getdigit(num, i);
    const digit2 = getdigit(num, i + 1);
    if (digit1 > digit2) { return false; }
    const diff = digit2 - digit1;
    if (diff > 1) { return false; }
  }
  const firstdigit = getdigit(num, 0);
  const lastdigit = num % 10;
  if (lastdigit - firstdigit > 1) {
    return false;
  }
  return true;
};

const mindigitnumber = (num) => {
  let min = digits(num) - 1;
  for (let i = digits(num) - 1; i >= 0; i -= 1) {
    if (digits(num) === 1) { return 0; }
    if (getdigit(num, i) < getdigit(num, min)) {
      min = i;
    }
  }
  return min;
};

const maxdigitnumber = (num) => {
  let max = 0;
  for (let i = 0; i < digits(num); i += 1) {
    if (digits(num) === 1) { return 0; }
    if (getdigit(num, i) > getdigit(num, max)) {
      max = i;
    }
  }
  return max;
};

const balanceextremes = (num) => {
  let difference = 0;
  for (let i = 0; i < digits(num); i += 1) {
    if (i === mindigitnumber(num)) {
      difference += 10 ** (digits(num) - (i + 1));
    }
    if (i === maxdigitnumber(num)) {
      difference -= 10 ** (digits(num) - (i + 1));
    }
  }
  return num + difference;
};

const balancenum = (num) => {
  if (isbalanced(num)) { return num; }
  if (digits(num) === 1) { return num; }
  if (!isbalanced(balanceextremes(num))) {
    return balancenum(balanceextremes(num));
  }
  return balanceextremes(num);
};

const balancegame = () => {
  rules('Balance the given number, please.');
  const balance = num => cons(`${num}`, balancenum(num));
  process(() => balance(randnum(10000)));
};

export default balancegame;
