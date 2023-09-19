const prompt = require('prompt-sync')();

function printPattern(row){
    for(let i=1;i<=row;i++){
        let rows=''
        for(let j=1;j<=i;j++){
            rows+=j+' '
            
        }
        console.log(rows)
        
    }
}

const row=prompt('Enter rows: ')
printPattern(row)
