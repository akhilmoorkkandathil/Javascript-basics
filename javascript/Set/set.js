const mySet =new Set();
mySet.add([10,15,32,53,20,20,20,20,20])
mySet.add('Akhil')
mySet.add([10,15,32,53,20])
mySet.add({'name':'Akhil','Age':22,'Study':'CS'})
mySet.add({'name':'Akhil','Age':22,'Study':'CS'})
mySet.add(42)
mySet.add(42)
console.log(mySet)
mySet.delete('Akhil')
console.log(mySet.has(20))
console.log(mySet)

