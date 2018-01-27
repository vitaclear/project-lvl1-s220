import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../common';

const primegame = () => {
  rules('Please answer "yes" if a number is prime, otherwise answer "no".');
  const isprime = (num) => {
    if (num < 2) { return 'no'; }
    for (let i = Math.round(num / 2); i > 1; i -= 1) {
      if (num % i === 0) { return 'no'; }
    }
    return 'yes';
  };
  const makedouble = k => cons(k, isprime(k));
  process(() => makedouble(randnum(100)));
};

export default primegame;
