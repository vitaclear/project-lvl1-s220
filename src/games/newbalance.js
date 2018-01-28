import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../index';

const isbalanced = (digit1, digit2, digit3, digit4) => {
  if (digit1 <= digit2) {
    if (digit2 <= digit3) {
      if (digit3 <= digit4) {
        if ((digit4 - digit1) <= 1) {
          return true;
        }
      }
    }
  }
  return false;
};

const balancenum = (digit1, digit2, digit3, digit4) => {
  if (isbalanced(digit1, digit2, digit3, digit4)) { return `${digit1}${digit2}${digit3}${digit4}`; }
  if (digit1 === Math.max(digit1, digit2, digit3, digit4)) {
    if (digit4 === Math.min(digit2, digit3, digit4)) {
      return balancenum(digit1 - 1, digit2, digit3, digit4 + 1);
    } else if (digit3 === Math.min(digit2, digit3, digit4)) {
      return balancenum(digit1 - 1, digit2, digit3 + 1, digit4);
    }
    return balancenum(digit1 - 1, digit2 + 1, digit3, digit4);
  } else if (digit2 === Math.max(digit1, digit2, digit3, digit4)) {
    if (digit4 === Math.min(digit1, digit3, digit4)) {
      return balancenum(digit1, digit2 - 1, digit3, digit4 + 1);
    } else if (digit3 === Math.min(digit1, digit3, digit4)) {
      return balancenum(digit1, digit2 - 1, digit3 + 1, digit4);
    }
    return balancenum(digit1 + 1, digit2 - 1, digit3, digit4);
  } else if (digit3 === Math.max(digit1, digit2, digit3, digit4)) {
    if (digit4 === Math.min(digit1, digit2, digit4)) {
      return balancenum(digit1, digit2, digit3 - 1, digit4 + 1);
    } else if (digit2 === Math.min(digit1, digit2, digit4)) {
      return balancenum(digit1, digit2 + 1, digit3 - 1, digit4);
    }
    return balancenum(digit1 + 1, digit2, digit3 - 1, digit4);
  }
  if (digit3 === Math.min(digit1, digit2, digit3)) {
    return balancenum(digit1, digit2, digit3 + 1, digit4 - 1);
  } else if (digit2 === Math.min(digit1, digit2, digit3)) {
    return balancenum(digit1, digit2 + 1, digit3, digit4 - 1);
  }
  return balancenum(digit1 + 1, digit2, digit3, digit4 - 1);
};

const newbalancegame = () => {
  rules('Balance the given number, please.');
  const tasknum = (num1, num2, num3, num4) => cons(`${num1}${num2}${num3}${num4}`, balancenum(num1, num2, num3, num4));
  process(() => tasknum(randnum(9), randnum(9), randnum(9), randnum(9)));
};

export default newbalancegame;
