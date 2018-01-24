import readlineSync from 'readline-sync';

const hello = () => {
  const name = readlineSync.question('Enter your name, please: ');
  console.log('Hello,', name, '!');
};
export default hello;
