import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../index';

const evengame = () => {
  rules('Please answer "yes" if a number is even, otherwise answer "no".');
  const iseven = (numb) => {
    if (numb % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const makedouble = k => cons(k, iseven(k));
  process(() => makedouble(randnum(100)));
};

export default evengame;
