const array = [2,5,3,7,8]
let max=0;
const maxValue = function(){
    for (const value of array){
        if(max<value){
            max=value;
        }
    }
    return max
}

console.log(maxValue())