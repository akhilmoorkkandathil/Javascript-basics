const print = (num,mod) =>{
    if(num%mod==0){
        return true;
    }else{
        return false;
    }
}
const value=print(10123,232);
if(value===true){
    console.log("Completly divisible")
}else(
    console.log("Not completly devisible")
)