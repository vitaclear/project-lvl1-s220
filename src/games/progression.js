import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../common';

const generateprogression = () => {
  const startnum = randnum(15);
  const step = randnum(30);
  const missed = randnum(9);
  const missednumber = startnum + (step * (missed));
  let progression = '';
  for (let i = 1; i < missed + 1; i += 1) {
    const nextnum = startnum + (step * (i - 1));
    progression += `${nextnum}  `;
  }
  progression += '.. ';
  for (let i = missed + 2; i <= 10; i += 1) {
    const nextnum = startnum + (step * (i - 1));
    progression += `${nextnum}  `;
  }
  return cons(progression, missednumber);
};

const progressiongame = () => {
  rules('What number is missing in this progression?');
  process(generateprogression);
};

export default progressiongame;
