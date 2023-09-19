const radius = [1,2,3,4]

const area = function(r){
    return Math.PI*r*r
}
const perimeter = function(r){
    return 2*Math.PI*r
}
const diameter = function(r){
    return 2*r
}


// const calculate = function(radius,logic){
//     const output=[]
//     for( let i = 0; i < radius.length ;i++){
//         output.push(logic(radius[i]))
//     }
//     return output
// }
// console.log(calculate(radius,area))
// console.log(calculate(radius,perimeter))
// console.log(calculate(radius,diameter))

console.log(radius.map(area))
console.log(radius.map(perimeter))
console.log(radius.map(diameter))
