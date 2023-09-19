const asynFirst = async function* (){
    let i=0;
    while(true){
    yield new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(i)
        }, 1000);
    })
    i++
}
}
console.log(asynFirst)
const asyncFirstGenerator=asynFirst();
console.log(asyncFirstGenerator)
const asyncExicuter=async function(){
    for await(const promise of asyncFirstGenerator){
        console.log(promise)
    }
}
asyncExicuter();
