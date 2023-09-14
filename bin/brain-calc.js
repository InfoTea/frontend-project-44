#!/usr/bin/env node

import playAGame from '../src/game-play.js';

const rule = 'What is the result of the expression?';

const getRandomNum = (n) => Math.ceil(Math.random() * n);

const getRandomSign = () => ['+', '-', '*'][getRandomNum(3) - 1];

const howToPlay = () => {
  const num1 = getRandomNum(20);
  const num2 = getRandomNum(20);
  const sign = getRandomSign();
  const rightExtansion = `${num1} ${sign} ${num2}`;
  let rightAnswer;
  switch (sign) {
    case '+':
      rightAnswer = num1 + num2;
      break;
    case '-':
      rightAnswer = num1 - num2;
      break;
    default:
      rightAnswer = num1 * num2;
  }
  return [rightExtansion, rightAnswer.toString()];
};

playAGame(rule, howToPlay);
