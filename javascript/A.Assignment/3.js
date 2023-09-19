const prompt = require('prompt-sync')();

const P=parseInt(prompt('Enter principle amount : '))
const r=parseFloat(prompt('Enter rate of interest : '))
const n=parseFloat(prompt('Enter number of years : '))
const SI=(P*n*r)/100
console.log(`Simple interest = ${SI}`)