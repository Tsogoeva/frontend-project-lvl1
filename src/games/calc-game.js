import commonLogic from '../index.js';
import getRandomNumber from '../random-number.js';

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculation = (randomNum1, operator, randomNum2) => {
  switch (operator) {
    case '+':
      return randomNum1 + randomNum2;
    case '-':
      return randomNum1 - randomNum2;
    case '*':
      return randomNum1 * randomNum2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getQuestionAndAnswer = () => {
  const randomNum1 = getRandomNumber(1, 10);
  const randomNum2 = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const correctAnswer = String(calculation(randomNum1, operator, randomNum2));
  return [question, correctAnswer];
};

export default () => commonLogic(rules, getQuestionAndAnswer);
