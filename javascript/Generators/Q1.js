const countToTen=function*(){
    let i=0
    while(i<=10){
        yield i;
        i++
    }
}

const counterObject=countToTen();
console.log(counterObject.next())


for(let value of counterObject){
    console.log(value)
}