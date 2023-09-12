import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const getName = async () => {
  const name = await rl.question('May I have your name? ');
  return name;
};

const getRandomFromOneToTen = () => Math.ceil(Math.random() * 10);

const getStringOfNumEven = (num) => {
  if (num % 2) {
    return 'no';
  }
  return 'yes';
};

const getAnswer = async () => {
  const answer = await rl.question('Your answer: ');
  return answer;
};

const evenGame = async () => {
  console.log('Welcome to the Brain Games!');
  const userName = await getName();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const newRandom = getRandomFromOneToTen();
    console.log(`Question: ${newRandom}`);
    const rightAnswer = getStringOfNumEven(newRandom);
    const userAnswer = await getAnswer();
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\n
          Let's try again, Bill!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

await evenGame();
rl.close();
