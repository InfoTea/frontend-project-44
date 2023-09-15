#!/usr/bin/env node

import playAGame from '../src/game-play.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumber = (n, first = 0) => first + Math.floor(Math.random() * n);

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const howToPlay = () => {
  const rightExtansion = getRandomNumber(100);

  const rightAnswer = isPrime(rightExtansion) ? 'yes' : 'no';
  return [rightExtansion, rightAnswer];
};

playAGame(rule, howToPlay);
