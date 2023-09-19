const prompt = require('prompt-sync')();

const mark=parseFloat(prompt('Please enter your mark: '))
if(mark<0 || mark>100){
    console.log('You entered incorrect mark')
}else if(mark<50){
    console.log('You failed in the exam')
}else if(mark<60){
    console.log('E Grade')
}else if(mark<70){
    console.log('D Grade')
}else if(mark<80){
    console.log('C Grade')
}else if(mark<90){
    console.log('B Grade')
}else{
    console.log('A Grade')
}




switch(true){
    case mark<50:
        console.log('a grade')
        break;
    case mark<60:
        console.log('')
        break;
    case 3:
            console.log('')
            break;
        
    case 4:
            console.log('')
            break
}