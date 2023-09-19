const prompt = require('prompt-sync')();

const writtenexam = parseFloat(prompt("enter the mark scored in written = "));
const labExam = parseFloat(prompt("enter the mark scored in lab = "));
const assignment = parseFloat(prompt("enter the mark scored in assignment = "));


const grade= (( writtenexam *70 )+( labExam*20 )+( assignment* 10))/100;
console.log("Grade of the students is : ",grade);