const animals=[
    "dog",
    "monkey",
    "tiger",
    "elephant",
    "lion",
    "rabbit"]
console.log(animals) //print all array items
animals.unshift("Dear")//add item to first of arra
animals.pop() //remove last element

animals.push("Beer")//add last item to array

animals.shift(); //remove first item from array
console.log(animals)
console.log(animals[0])
console.log(animals[animals.length-1])
animals.pop() //remove last item

console.log("--------------")
for(let i=0;i<animals.length;i++){
    console.log(animals[i])
}
