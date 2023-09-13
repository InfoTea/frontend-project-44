#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomFromOneToTen = () => Math.ceil(Math.random() * 10);

const getStringOfNumEven = (num) => {
  if (num % 2) {
    return 'no';
  }
  return 'yes';
};

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const newRandom = getRandomFromOneToTen();
    console.log(`Question: ${newRandom}`);
    const rightAnswer = getStringOfNumEven(newRandom);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\n
          Let's try again, Bill!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

evenGame();
