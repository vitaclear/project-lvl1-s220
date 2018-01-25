import readlineSync from 'readline-sync';

const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Enter your name, please: ');
  console.log(`Hello, ${name}!`);
  return `${name}`;
};
export default hello;
