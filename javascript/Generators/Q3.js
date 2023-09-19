const randomBetween= function* (amount,min,max){
    for(let i=0;i<amount;i++){
        yield Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const randomGenerator=randomBetween(5,20130,313420);
for( const value of randomGenerator){
    console.log(value)
}