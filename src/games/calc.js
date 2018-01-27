import { cons } from 'hexlet-pairs';
import { rules, process, randnum } from '../index';

const calcgame = () => {
  rules('Please answer what is the result of the expression.');
  const tasktodo = () => {
    const num1 = randnum(100);
    const num2 = randnum(100);
    const action = randnum(3);
    if (action === 1) {
      return cons(`${num1} * ${num2}`, num1 * num2);
    }
    if (action === 2) {
      return cons(`${num1} + ${num2}`, num1 + num2);
    }
    return cons(`${num1} - ${num2}`, num1 - num2);
  };
  process(() => tasktodo());
};

export default calcgame;
