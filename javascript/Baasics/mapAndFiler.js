const array = [3,5,3,7,5,8,10,5]


const double = function(x){
    return 2*x;
}

const odd = function(y){
    return y%2===1
}

console.log(array.map(double))
console.log(array.filter(odd))