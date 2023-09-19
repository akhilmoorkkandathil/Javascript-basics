const prompt = require('prompt-sync')();

const limit=parseInt(prompt('Enter limit: '))

let sum=0
for(let i=1;i<=limit;i+=2){
     sum+=i
}
console.log(`Sum of odd numbers upto ${limit} = ${sum}`)

