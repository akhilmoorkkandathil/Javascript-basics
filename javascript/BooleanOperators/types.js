console.log(2===2) //true
console.log(2>3) //false
console.log(2<=3) //true
console.log(2<4) //true
console.log(4>=5) //false
console.log(5!=5) //false
console.log(!true) //false
console.log("----------------------------AND")
console.log(true && "oranges") //oranges
console.log(false && "apple") //false

console.log(0 && "apple") //0
console.log("" && "apple") //
console.log(null && "apple") //null
console.log(undefined && "apple") //undefined
console.log(NaN && "apple") //NaN
console.log(1 && "apple") //apple
console.log("----------------------------OR")
console.log(true || false) //true
console.log(undefined || "apple") //apple
console.log(NaN || "apple") //apple
console.log(1 || "apple") //1
console.log(0 || "apple") //apple
console.log("" || "apple") //apple
console.log("---------------------------- Nullish coelescing")
console.log(true ?? "oranges") //true
console.log(false ?? "apple") //apple ?????????????????false

console.log(0 ?? "apple") //apple
console.log("" ?? "apple") //apple
console.log(null ?? "apple") //apple
console.log(undefined ?? "apple") //apple
console.log(NaN ?? "apple") //apple ????????????NaN
console.log(1 ?? "apple") //apple