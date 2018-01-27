import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../common';

const primegame = () => {
  rules('Please answer "yes" if a number is prime, otherwise answer "no".');
  const isprime = (num) => {
    if (num < 2) { return false; }
    for (let i = Math.round(num / 2); i > 1; i -= 1) {
      if (num % i === 0) { return false; }
    }
    return true;
  };
  const makedouble = k => cons(k, isprime(k));
  process(() => makedouble(randnum(100)));
};

export default primegame;
