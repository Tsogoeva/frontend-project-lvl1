import readlineSync from 'readline-sync';

const checkEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const roundCount = 3;

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let counter = 1; counter <= roundCount; counter += 1) {
    const max = 100;
    const min = 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === checkEven(randomNumber)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkEven(randomNumber)}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};
