import getRandomNumber from '../random-number.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (randomNum1, randomNum2) => {
  if (!randomNum2) {
    return randomNum1;
  }
  return getGcd(randomNum2, randomNum1 % randomNum2);
};

const getQuestionAndAnswer = () => {
  const randomNum1 = getRandomNumber();
  const randomNum2 = getRandomNumber();
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = String(getGcd(randomNum1, randomNum2));
  return [question, correctAnswer];
};

export { rules, getQuestionAndAnswer };