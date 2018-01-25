import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../common';

const calcgame = () => {
  rules('Please answer what is the result of the expression.');
  const rightansw = expression => String(expression);
  const expr = (firstnum, secondnum, thirdnum) => {
    if (secondnum % 3 === 0) {
      return cons(`${firstnum} * ${thirdnum}`, String(firstnum * thirdnum));
    }
    if (secondnum % 3 === 1) {
      return cons(`${firstnum} + ${thirdnum}`, String(firstnum + thirdnum));
    }
    return cons(`${firstnum} - ${thirdnum}`, String(firstnum - thirdnum));
  };
  process(() => expr(randnum(100), randnum(10), randnum(100)), rightansw);
};

export default calcgame;
