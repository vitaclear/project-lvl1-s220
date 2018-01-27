import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../index';

const generatenumber = (start, step, number) => {
  if (number === 1) { return start; }
  if (number < 1) { return undefined; }
  return start + (step * (number - 1));
};

const generateprogression = () => {
  const startnum = randnum(15);
  const step = randnum(30);
  const missed = randnum(9) + 1;
  const missednumber = startnum + (step * (missed - 1));
  let progression = '';
  for (let i = 1; i <= 10; i += 1) {
    if (i === missed) {
      progression += '..  ';
    } else {
      progression += `${generatenumber(startnum, step, i)}  `;
    }
  }
  return cons(progression, missednumber);
};

const progressiongame = () => {
  rules('What number is missing in this progression?');
  process(generateprogression);
};

export default progressiongame;
