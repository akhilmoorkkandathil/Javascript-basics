const prompt = require('prompt-sync')();


const input1 = prompt(`Enter the values of Array (comma-separated): `);
const array = input1.split(',')

let count=0;
for(let value in array){
    if(value%2===0){
        count++
    }
}
console.log('Count of even numbers in the given array',count)