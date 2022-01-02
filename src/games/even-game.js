import randomNumber from '../random-number.js';

const checkEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = `Question: ${randomNumber}`;
  const correctAnswer = checkEven(randomNumber);
  return [question, correctAnswer];
};

export { rules, getQuestionAndAnswer };
