#!/usr/bin/env node

import askName from '../src/cli.js';

const name = askName();
console.log(`Hello, ${name}!`);
