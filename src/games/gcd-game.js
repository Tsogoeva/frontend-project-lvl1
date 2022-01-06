import commonLogic from '../index.js';
import getRandomNumber from '../random-number.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (randomNum1, randomNum2) => {
  if (!randomNum2) {
    return randomNum1;
  }
  return getGcd(randomNum2, randomNum1 % randomNum2);
};

const getQuestionAndAnswer = () => {
  const randomNum1 = getRandomNumber(1, 100);
  const randomNum2 = getRandomNumber(1, 100);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = String(getGcd(randomNum1, randomNum2));
  return [question, correctAnswer];
};

export default () => commonLogic(rules, getQuestionAndAnswer);
