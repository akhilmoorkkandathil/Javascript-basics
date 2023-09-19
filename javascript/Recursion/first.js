const counter = (number)=>{
    if(number===0)return;
    console.log(number)
    counter(number-1)
}
counter(5)