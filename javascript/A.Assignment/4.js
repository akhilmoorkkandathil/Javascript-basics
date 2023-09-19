const prompt = require('prompt-sync')();

const mark=parseFloat(prompt('Please enter your mark: '))
if(mark<0 || mark>100){
    console.log('You entered incorrect mark')
}else if(mark<50){
    console.log('You failed in the exam')
}else{
    console.log('Congradulation..You passed')
}


 mark>50?console.log('pass'):console.log('fail')