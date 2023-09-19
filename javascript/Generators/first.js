const counter=function*(){
    let i=1
    while(true){
        yield i;
        i++
    }
}
const counterGenerator=counter();
let count=0;
while(count<5){
    console.log(counterGenerator.next())
    count++
}