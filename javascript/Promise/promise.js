const mypromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve('Here is your icecream')
        reject('sory! Your order rejected.')
    },1000)
})

mypromise
    .then((resolvedvalue)=>{
        console.log(mypromise)
        console.log(resolvedvalue)
        return 'yo!'
    })
    .catch((error)=>{
        console.log(mypromise)
        console.log(error)
    })

    console.log('Hello')
    console.log(mypromise)