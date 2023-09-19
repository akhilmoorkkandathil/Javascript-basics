const arr =[2,4,7,4,5,2]

const sum = arr.reduce(function(acc,cur){
    acc+=cur
    return acc
},0)

console.log(sum)

const arr1 =[2,4,7,4,5,2]

const max = arr1.reduce(function(max,cur){
    if(max<cur){
        max=cur
    }
    return max
},0)

console.log(max)