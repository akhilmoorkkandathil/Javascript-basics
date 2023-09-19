const Details = {
    name:'Akhil',
    age:22,
    Symbol:Symbol('Hello')
}
console.log(Details)
console.log(Object.entries(Details))
console.log(Details.name)
for (const keys of Object.keys(Details)){
    console.log(keys)
}