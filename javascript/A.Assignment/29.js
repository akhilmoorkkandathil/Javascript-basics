


const myArray = [1, 2, 3, 4, 5];

function callback(array) {
    return array.reduce((acc, cur) => acc + cur) % 2 === 0;
}

const myFilter = function (myArray) {
    return myArray.reduce((acc, cur) => acc + cur, 0);
}

const result = myFilter(myArray, callback);
console.log(result);



// function myFilter(myArray, callback) {
//     let sum = 0;

//     for (let i = 0; i < myArray.length; i++) {
//         if (callback(myArray[i])) {
//             sum += myArray[i];
//         }
//     }

//     return sum;
// }

// function isSumEven(num) {
//     let sum = 0;
//     while (num) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return sum % 2 === 0;
// }

// const inputArray = [1, 2, 3, 4, 5];
// const result = myFilter(inputArray, isSumEven);
// console.log(result);
// const myArray=[1,2,3,4,5]


// function callback(array){
//     array.reduce((acc,cur)=>{
//         acc+=cur
//         if(acc%2===0){
//             return true
//         }
//         return false
//     })
// }
// const myFilter=function(myArray,callback ){
//     const cb=callback
//     if(cb==true){
//         myArray.reduce((acc,cur)=>{
//             acc+=cur
//         })

//     }
//     return acc
// }

// console.log(myFilter())