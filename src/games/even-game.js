import getRandomNumber from '../random-number.js';

const checkEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const number = getRandomNumber();
  const question = number;
  const correctAnswer = checkEven(number);
  return [question, correctAnswer];
};

export { rules, getQuestionAndAnswer };
