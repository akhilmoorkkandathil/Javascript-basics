const prompt = require('prompt-sync')();

let value = prompt("enter the size of array :");
let array=[]
let array2=[]
console.log('Enter values of first array ')
for(let i=0; i<value; i++){
  array[i]=[];
  for(let j=0;j<value;j++){
    array[i][j]=parseInt(prompt(""));
  }
}
console.log(array)
console.log('Enter values of second array')
for(let i=0; i<value; i++){
  array2[i]=[];
  for(let j=0;j<value;j++){
    array2[i][j]=parseInt(prompt(""));
}
}
console.log(array2)
for(let i=0; i<value; i++){
  for(let j=0; j<value; j++){
    array[i][j]=array[i][j]+array2[i][j];


  }
}
console.log("sum of 2 array is :")
console.log(array)