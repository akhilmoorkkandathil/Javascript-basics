const array=[45,40,11,43,23,12,11,4,4,12,12]
const uniqueSet=new Set();

for(let i=0;i<array.length-1;i++){
    
    if(uniqueSet.has(array[i])){
        console.log(array[i]);
        break;
    }
    uniqueSet.add(array[i])
}