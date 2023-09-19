const prompt = require('prompt-sync')();


const input1 = prompt(`Enter the values of Array 1 (comma-separated): `);
const array1 = input1.split(',')

const input2 = prompt(`Enter the values of Array 2 (comma-separated): `);
const array2 = input2.split(',')

let temp = array1
 let   arr1 = array2
 let   arr2 = temp

console.log('Array 1:',arr1)
console.log('Array 2:',arr2)
