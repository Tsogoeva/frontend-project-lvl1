import commonLogic from '../index.js';
import getRandomNumber from '../random-number.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (num) => (isPrime(num) === false ? 'no' : 'yes');

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

export default () => commonLogic(rules, getQuestionAndAnswer);
