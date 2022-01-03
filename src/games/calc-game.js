import getRandomNumber from '../random-number.js';

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const minIndex = 0;
  const maxIndex = operators.length;
  const randomIndex = Math.floor(Math.random() * (maxIndex - minIndex)) + minIndex;
  return operators[randomIndex];
};

const calculation = (randomNum1, randomNum2, operator) => {
  let result;
  if (operator === '+') {
    result = randomNum1 + randomNum2;
  } else if (operator === '-') {
    result = randomNum1 - randomNum2;
  } else if (operator === '*') {
    result = randomNum1 * randomNum2;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const randomNum1 = getRandomNumber(1, 10);
  const randomNum2 = getRandomNumber(1, 10);
  const operator = getRandomOperator();
  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const correctAnswer = String(calculation(randomNum1, randomNum2, operator));
  return [question, correctAnswer];
};

export { rules, getQuestionAndAnswer };
