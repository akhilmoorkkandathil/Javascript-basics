const monkeyDetails = {
    name:'Deepu',
    food : 'rise',
    hobbby: 'playing',
    age:22
}

const printMonkey = () => {
    console.log(monkeyDetails.name)
    monkeyDetails.age+=1
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        resolve(monkeyDetails.age)
       }, 3000);
    })
}
const awaitMonkey=await printMonkey();
export{monkeyDetails,awaitMonkey,printMonkey}
