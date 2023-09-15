#!/usr/bin/env node

import playAGame from '../src/game-play.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (!b ? a : gcd(b, a % b));
const randomNum = (n) => Math.ceil(Math.random() * n);

const howToPlay = () => {
  const num1 = randomNum(20);
  const num2 = randomNum(20);
  const rightExtansion = `${num1} ${num2}`;

  const rightAnswer = gcd(num1, num2).toString();
  return [rightExtansion, rightAnswer];
};

playAGame(rule, howToPlay);
