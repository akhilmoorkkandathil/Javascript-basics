const prompt = require('prompt-sync')();

function main(){
  let array = [];
   getarray(array);
   displayarray(array);
}
function getarray(array){
  let size = parseInt(prompt("Enter the size of array: "))
  for(let i=0; i<size; i++){
    array[i]=prompt("Enter the values: ");
  }
}
function displayarray(array){
console.log(array)
}
main();