#!/usr/bin/env node

import playAGame from '../src/game-play.js';

const rule = 'What number is missing in the progression?';

const getRandomNumber = (n, first = 0) => first + Math.floor(Math.random() * n);
const hideArrayElem = (array, symbol, position) => {
  const newArray = [...array];
  newArray[position] = symbol;
  return newArray;
};
const generateProgression = (start, d, length) => {
  const progression = [start];
  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + d);
  }
  return progression;
};

const howToPlay = () => {
  const symbol = '..';
  const start = getRandomNumber(10);
  const d = 1 + getRandomNumber(4);
  const length = getRandomNumber(10, 5);
  const position = getRandomNumber(length);
  const progression = generateProgression(start, d, length);

  const rightExtansion = hideArrayElem(progression, symbol, position).join(' ');

  const rightAnswer = progression[position].toString();
  return [rightExtansion, rightAnswer];
};

playAGame(rule, howToPlay);
