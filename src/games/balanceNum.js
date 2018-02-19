import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../index';

const isBalanced = (digits) => {
  const lastIndex = digits.length - 1;
  const diffFstLst = digits[lastIndex] - digits[0];
  if (diffFstLst < 0 || diffFstLst > 1) { return false; }
  return digits.slice(0, lastIndex).reduce((acc, el, ind) => {
    const difference = digits[ind + 1] - el;
    if (difference < 0 || difference > 1) { return false; }
    return acc;
  }, true);
};

const getMinIndex = (digits) => {
  const init = {
    minI: 0, minValue: digits[0],
  };
  const minimum = digits.reduceRight((acc, el, index) => {
    if (el < acc.minValue) { return { minI: index, minValue: el }; }
    return acc;
  }, init);
  return minimum.minI;
};

const getMaxIndex = (digits) => {
  const init = {
    maxI: 0, maxValue: digits[0],
  };
  const maximum = digits.reduce((acc, el, index) => {
    if (el > acc.maxValue) { return { maxI: index, maxValue: el }; }
    return acc;
  }, init);
  return maximum.maxI;
};

const balanceStep = (digitArray) => {
  const min = getMinIndex(digitArray);
  const max = getMaxIndex(digitArray);
  return digitArray.map((el, index) => {
    if (index === max) { return el - 1; }
    if (index === min) { return el + 1; }
    return el;
  });
};

const balanceNum = (num) => {
  if (isBalanced(num)) { return num; }
  return balanceNum(balanceStep(num));
};

const generate = (size, array = []) => {
  if (size > 0) {
    array.push(randnum(9));
    return generate(size - 1, array);
  }
  return array;
};

const balanceNumGame = () => {
  rules('Balance the given number, please.');
  const taskNum = num => cons(num.join(''), balanceNum(num).join(''));
  process(() => taskNum(generate(4)));
};

export default balanceNumGame;
