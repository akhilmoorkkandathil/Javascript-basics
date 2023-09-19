const prompt = require('prompt-sync')();

const string=prompt('Enter a string: ')

function checking(){
    for ( let i=0;i<(string.length-1)/2;i++){
        if(string[i]==string[string.length-(i+1)]){
            return true;
        }else{
            return false
        }
    }
}
const check=checking()
if(check){
    console.log('Pallindrom')
}else{
    console.log('Not Pallindrom')
}