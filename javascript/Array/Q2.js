const items=[
    'rice',
    'meat',
    'wheat',
    'mayo',
    'pen'
]
const plural=items.map((item)=>{
    if(item=='rice'){
        return 'Biriyani';
        
    }else {
        return item+'s';
    }
})
console.log(items);
console.log(plural);