import getRandomNumber from '../random-number.js';

const rules = 'What number is missing in the progression?';

const firstRandomNum = getRandomNumber(1, 100);
const randomNumOfSteps = getRandomNumber(5, 10);
const randomProgression = getRandomNumber(1, 10);

const getProgression = () => {
  const progression = [];
  for (let i = 0; i <= randomNumOfSteps; i += 1) {
    if (progression.length === randomNumOfSteps) {
      return progression;
    }
    progression.push(firstRandomNum + randomProgression * i);
  }
  return progression;
};

const puzzledIndex = getRandomNumber(0, randomNumOfSteps - 1);
const puzzledNumber = getProgression().splice(puzzledIndex, 1);
const puzzledProgression = getProgression();
puzzledProgression[puzzledIndex] = '..';

const getQuestionAndAnswer = () => {
  const question = puzzledProgression.join(', ');
  const correctAnswer = String(puzzledNumber);
  return [question, correctAnswer];
};

export { rules, getQuestionAndAnswer };
