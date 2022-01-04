import getRandomNumber from '../random-number.js';

const checkEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const checkDigit = getRandomNumber(1, 100);
  const question = checkDigit;
  const correctAnswer = checkEven(checkDigit);
  return [question, correctAnswer];
};

export { rules, getQuestionAndAnswer };
