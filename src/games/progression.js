import commonLogic from '../index.js';
import getRandomNumber from '../random-number.js';

const rule = 'What number is missing in the progression?';

const getProgression = (firstNum, step, length) => {
  const progression = [firstNum];
  for (let i = 1; i <= length; i += 1) {
    progression.push(firstNum + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const firstRandomNum = getRandomNumber(1, 100);
  const randomStep = getRandomNumber(1, 10);
  const randomLength = getRandomNumber(5, 10);
  const progression = getProgression(firstRandomNum, randomStep, randomLength);
  const puzzledIndex = getRandomNumber(0, progression.length - 1);

  const correctAnswer = String(progression[puzzledIndex]);
  progression[puzzledIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => commonLogic(rule, getQuestionAndAnswer);
