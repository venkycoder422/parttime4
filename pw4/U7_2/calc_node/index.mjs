
import inquirer from 'inquirer'

import add from './add.js'
import sub from './sub.js'
import mul from './mul.js'
import div from './div.js'
import sin from './sin.js'
import cos from './cos.js'
import tan from './tan.js'
import {randomInt}  from 'crypto'

const number = randomInt(0,10);
const questions = [
  {
    type: 'input',
    name: 'number1',
    message: "Enter your first number"
  }, {
    type: 'input',
    name: 'number2',
    message: "Enter your second number",
    
  }
];

inquirer.prompt(questions).then(answers => {
  console.log(JSON.stringify("SUM OF TWO NUMBERS: "+ add(answers.number1,answers.number2)));
  console.log(JSON.stringify("SUB OF TWO NUMBERS: "+sub(answers.number1,answers.number2)));
  console.log(JSON.stringify("MUL OF TWO NUMBERS: "+mul(answers.number1,answers.number2)));
  console.log(JSON.stringify("DIV OF TWO NUMBERS: "+div(answers.number1,answers.number2)));
  console.log(JSON.stringify("SIN:"+sin(answers.number1)));
  console.log(JSON.stringify("COS:"+cos(answers.number1)));
  console.log(JSON.stringify("TAN:"+tan(answers.number1)));
  console.log(number);
});


