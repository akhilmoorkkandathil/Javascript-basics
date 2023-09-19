const firstObject={
    name:'Akhil',
    place:'Malappuram',
    age:'22',
    education:'Degree',
    
}

console.log(firstObject)
console.log(Object.keys(firstObject))
console.log(Object.values(firstObject))
console.log(firstObject.name)
console.log(Object.entries(firstObject))
delete firstObject.place

firstObject["name"]='Lubna'
firstObject.age=18
console.log(firstObject)
console.log(Object.values(firstObject))