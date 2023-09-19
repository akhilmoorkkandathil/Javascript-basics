const prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter a number: "))
let flag=0;
for(let i=3; i<num/2; i++){
  if (num%i == 0){
    flag=1;
    break;
  }
}
if(flag) {
  console.log(`Entered number ${num} is not a prime`);
}else{
  console.log(`Entered number ${num} is a prime`);
}
