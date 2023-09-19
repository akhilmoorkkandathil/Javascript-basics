console.log('started')
const makeTimeout=(ms)=>{
    const newPromose= new Promise((resolve,reject)=>{
        setTimeout(() => {
            //resolve('All done')
            reject('Error occured')
        }, ms);
    })
    return newPromose
}

const myAwait=async()=>{
    try{
        console.log('Waiting to fetch')
        const fetchData=await makeTimeout(2000);
        console.log(fetchData)
    }catch(error){
        console.log(error)
    }
    console.log('when')
}
myAwait();
console.log('synchronous body content')