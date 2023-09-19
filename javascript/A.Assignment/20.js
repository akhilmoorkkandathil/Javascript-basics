let string = "";
let k=1;
for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
       if(j<=i){
       string+=" "+k;
        k++;
        }else{
        string+=" ";
        }
    }
     string += "\n"
}
console.log(string);