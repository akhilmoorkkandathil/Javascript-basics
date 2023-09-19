console.log('Program started')
const myPromise=new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve('step 1 completed')
    },3000)

})
console.log(myPromise)
console.log('Program processing')
myPromise
.then((resoedvalue)=>{
    console.log(resoedvalue)
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            resolve('step 2 completed')
        },2000)
    })
})
.then((value)=>{
    console.log(value)
})
.catch((rejectedvalue)=>{
    console.log(rejectedvalue)
})
