const counter = function*(){
    yield 1,
    yield 2,
    yield* [3,4,5,6]
    yield 7
}
console.log(counter)

const counterGenerator=counter();
console.log(counterGenerator)
let counterObject=counterGenerator.next();
while(counterObject.done===false){
    console.log(counterObject)
    counterObject=counterGenerator.next();
    
}