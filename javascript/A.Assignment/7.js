const prompt = require('prompt-sync')();

const Number=parseInt(prompt('Enter Number: '))
const limit=parseInt(prompt('Enter Limit of Multiplication Table: '))
let i=0
for(;i<=limit;){
    console.log('working')
    let product=i*Number
    // console.log(`${i} x ${Number} = ${product}`)
    if(limit==5){
        break
    }
}

const array=[1,2,3,4]

function square(x){
    return x*x
}
 array.map(square)