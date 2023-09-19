const myPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(10)
    }, 2000);
})
myPromise
.then((resolvedvalue)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve(20+resolvedvalue)
        }, 3000);
    })
})
.then((value)=>{
    console.log(value)
})

