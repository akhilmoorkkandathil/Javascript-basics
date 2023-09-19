const prompt = require('prompt-sync')();

const height =parseInt(prompt("Enter your height : "))


try{
    if(isNaN(height)){
        throw('Not a number error')
    }else if (height<50){
        throw ('Tiny height error')
    }else if (height>200){
        throw ('Huge height error')
    }else{
        console.log('Height: ',height)
    }
}catch(err){
    console.log(err)
}
