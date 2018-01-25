import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../common';

const evengame = () => {
  rules('Please answer "yes" if a number is even, otherwise answer "no".');
  const isright = (numb) => {
    if (numb % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const makedouble = k => cons(k, k);
  process(() => makedouble(randnum(100)), isright);
};

export default evengame;
