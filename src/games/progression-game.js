import getRandomNumber from '../random-number.js';

const rules = 'What number is missing in the progression?';

const getProgression = () => {
  const firstRandomNum = getRandomNumber(1, 100);
  const randomNumOfSteps = getRandomNumber(5, 10);
  const randomProgression = getRandomNumber(1, 10);
  const progression = [];
  for (let i = 0; i <= randomNumOfSteps; i += 1) {
    progression.push(firstRandomNum + randomProgression * i);
  }
  const puzzledIndex = getRandomNumber(0, randomNumOfSteps - 1);
  const puzzledNumber = progression[puzzledIndex];
  progression[puzzledIndex] = '..';
  return [progression, puzzledNumber];
};

const getQuestionAndAnswer = () => {
  const [progression, puzzledNumber] = getProgression();
  const question = progression.join(' ');
  const correctAnswer = String(puzzledNumber);
  return [question, correctAnswer];
};

export { rules, getQuestionAndAnswer };
