import readlineSync from 'readline-sync';

const playAGame = (rule, gameplay) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const [rightExtansion, rightAnswer] = gameplay();
    console.log(`Question: ${rightExtansion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\n
          Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default playAGame;
