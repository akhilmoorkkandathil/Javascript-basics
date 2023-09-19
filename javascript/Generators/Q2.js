const randomNumbers=function* (){
    while(true){
        yield Math.random();
    }
}

const randomGenerator=randomNumbers();
// 
let i=0
while(i<10){
    console.log(randomGenerator.next().value)
    i++
}