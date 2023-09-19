console.log('Program started')

const Promise1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Resolving......')
        resolve(10)
    }, 1000);
    
})

const Promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Resolving......')
        resolve(20)
    }, 7000);

})
Promise.all([Promise1,Promise2])
.then((values)=>{
    console.log(values)
    let sum=0
    for (Element of values){
        sum+=Element
    }
    console.log(sum)
})