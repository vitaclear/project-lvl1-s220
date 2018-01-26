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

const sort = (num) => {
  if (digits(num) === 1) { return num; }
  if (issorted(num)) { return num; }
  let result = '';
  let dig2 = '';
  if (String(num)[0] <= String(num)[1]) {
    dig2 = `${String(num)[1]}`;
    const rest = sort(`${dig2}${String(num).substring(2)}`);
    result = (`${String(num)[0]}${rest}`);
  }
  if (String(num)[0] > String(num)[1]) {
    dig2 = `${String(num)[0]}`;
    const rest = sort(`${dig2}${String(num).substring(2)}`);
    result = (`${String(num)[1]}${rest}`);
  }
  if (!issorted(result)) {
    return sort(result);
  }
  return result;
};

const balancenum = (num) => {
  if (isbalanced(num)) { return num; }
  if (digits(num) === 1) { return num; }
  const sortednum = sort(num);
  if (isbalanced(sortednum)) { return sortednum; }
  const new1stdigit = Number(String(sortednum)[0]) + 1;
  const newlastdigit = Number(String(sortednum)[digits(sortednum) - 1]) - 1;
  const middle = String(sortednum).substring(1, digits(sortednum) - 1);
  const newnum = Number(`${new1stdigit}${middle}${newlastdigit}`);
  return balancenum(newnum);
};

const balancegame = () => {
  rules('Balance the given number, please.');
  const balance = num => cons(`${num}`, balancenum(num));
  process(() => balance(randnum(10000)));
};

export default balancegame;
