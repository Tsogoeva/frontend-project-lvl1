import commonLogic from '../index.js';
import getRandomNumber from '../random-number.js';

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const minIndex = 0;
  const maxIndex = operators.length - 1;
  const randomIndex = getRandomNumber(minIndex, maxIndex);
  return operators[randomIndex];
};

const calculation = (randomNum1, operator, randomNum2) => {
  let result;
  switch (operator) {
    case '+':
      result = randomNum1 + randomNum2;
      break;
    case '-':
      result = randomNum1 - randomNum2;
      break;
    case '*':
      result = randomNum1 * randomNum2;
      break;
    default:
      result = null;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const randomNum1 = getRandomNumber(1, 10);
  const randomNum2 = getRandomNumber(1, 10);
  const operator = getRandomOperator();
  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const correctAnswer = String(calculation(randomNum1, operator, randomNum2));
  return [question, correctAnswer];
};

export default () => commonLogic(rules, getQuestionAndAnswer);
