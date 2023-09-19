const prompt = require('prompt-sync')();


const input1 = prompt(`Enter the values of Array (comma-separated): `);
const array = input1.split(',')

const sortedArray=array.sort((a,b)=>(b-a))
console.log('Sorted array',sortedArray)