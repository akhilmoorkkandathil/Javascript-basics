
const array=[10,11,12,13,14,15];
for(let i=0;i<array.length;i++){
    let value=array[i]*5;
    console.log(`${array[i]} x 5 = ${value}`)
}

console.log("-----smallest-----")

const a=[15,11,124,13,4,6];
let value=a[0];
for(let i=0;i<array.length;i++){
    if(a[i+1]<value){
        value=a[i+1]
    }
    i++
}
console.log("smallest number:", value)

array.forEach((i, index) => {
    console.log('5 x', array[index], '=', i * 5)
})