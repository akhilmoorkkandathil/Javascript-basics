
const bool=[
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
]
const value=bool.map((a)=>{
    if(a){
        return Math.random();
    }else{
        return 0;
    }
})
console.log(value);