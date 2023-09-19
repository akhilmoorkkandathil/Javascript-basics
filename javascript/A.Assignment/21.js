const prompt = require('prompt-sync')();

let limit = parseInt(prompt("Enter the limit: "))
let array =[]
let array2=[]

console.log('Enter the values: ')
for(let i=0; i<limit; i++){
array[i]=parseInt(prompt(""))
}
for(let i=0; i<limit-1; i++){
array2[i]=array[i] * array[i+1];
}
console.log(array2)