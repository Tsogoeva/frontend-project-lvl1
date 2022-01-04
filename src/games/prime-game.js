import getRandomNumber from '../random-number.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAndAnswer = () => {
  const checkDigit = getRandomNumber(1, 100);
  const question = checkDigit;
  const correctAnswer = checkPrime(checkDigit);
  return [question, correctAnswer];
};

export { rules, getQuestionAndAnswer };
