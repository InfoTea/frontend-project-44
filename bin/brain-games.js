#!/usr/bin/env node

import askName from '../src/cli.js'

console.log('node bin/brain-games.js');
console.log('Welcome to the Brain Games!');

const name = askName();
console.log(`Hello, ${name}!`);
