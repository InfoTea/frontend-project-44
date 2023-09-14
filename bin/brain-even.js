#!/usr/bin/env node

import playAGame from '../src/game-play.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const howToPlay = () => {
  const rightExtansion = Math.ceil(Math.random() * 10);
  const rightAnswer = rightExtansion % 2 ? 'no' : 'yes';
  return [rightExtansion, rightAnswer];
};

playAGame(rule, howToPlay);
