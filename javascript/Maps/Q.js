const detailAnimal=new Map();
detailAnimal.set('name','lion')
detailAnimal.set('age',10)
detailAnimal.set('food',['meat','rise','water'])
console.log(detailAnimal)
detailAnimal.get('food').push('fish')
console.log(detailAnimal)
detailAnimal.set('name','tiger')
console.log(detailAnimal)
detailAnimal.delete('age')
console.log(detailAnimal)