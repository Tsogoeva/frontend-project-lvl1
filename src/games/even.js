import commonLogic from '../index.js';
import getRandomNumber from '../random-number.js';

const isEven = (num) => (num % 2 === 0);

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => commonLogic(rule, getQuestionAndAnswer);
