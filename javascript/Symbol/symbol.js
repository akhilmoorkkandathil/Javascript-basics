const name1=Symbol('Monkey');
const name2=Symbol('monkey');
console.log(name1)
console.log(name1===name2)
console.log(name1.description)


console.log('---------------------')

const movie={
    name:'chithram',
    year:'20002',
    [Symbol('Actor')]:'lalettan',
    [Symbol('box office')]:'100cr'
}
console.log(movie)

for (const [keys,values] of Object.entries(movie)){  //not print symbols when iteration
    console.log(`${keys}:${values}`)
}
console.log(Object.getOwnPropertySymbols(movie))  //To get symbols