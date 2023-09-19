const nums=[5,3,7,6,9,8,3,2,4];
const eveNnum=nums.filter((num)=>{
    if(num%2==0){
        return true;
    }
})
console.log(eveNnum)

const animals=[
    'cat',
    'dog',
    'cow',
    'meow',
    'hourse',
    'camel'
];
const caninals=animals.filter((animal)=>{
    return animal.startsWith('c');
})
console.log(caninals)