import getRandomNumber from '../random-number.js';

const checkEven = (num) => (num % 2 === 0);

const getCorrectAnswer = (num) => (checkEven(num) === true ? 'yes' : 'no');

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

export { rules, getQuestionAndAnswer };
