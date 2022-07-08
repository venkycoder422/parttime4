

const add_result= require('./add');
const sub_result= require('./substract');
const mul_result = require('./multiplication');
const div_result = require('./divide');
let a=20;
let b=40;
console.log(`Addition of ${a} and ${b} is`,add_result(a,b));
console.log(`Substraction of ${a} and ${b} is`,sub_result(a,b));
console.log(`Multiplication of ${a} and ${b} is`,mul_result(a,b));
console.log(`Division of ${a} and ${b} is`,div_result(a,b));

