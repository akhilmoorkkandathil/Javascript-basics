const apple={
    'name':'apple',
    'quantity':1,
    'price':30
}
const banana={
    'name':'banana',
    'quantity':1,
    'price':10
}
const horlicks={
    'name':'horlicks',
    'quantity':1,
    'price':5
}


const store=new Map();
store.set('country','India')
store.set('location','Delhi')
store.set('products',[apple,banana,horlicks])
store.set('myDetails',{'name1':'Akhil','age':20,'study':'degree'})
console.log(store)
console.log(store.get('products'))
store.get('products')[2].price=7
store.get('products')[1].name='orange'
store.get('products')[0].quantity=2
console.log(store.get('products')[2])
console.log(store)
store.get('myDetails').age=22
console.log(store)
