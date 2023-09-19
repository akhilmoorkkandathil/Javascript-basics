let loggedin=false;
let loopcounter=0;
while(!loggedin){
    console.log("Incorrect")
    if(loopcounter===2){
        loggedin=true
    }
    loopcounter++
}


console.log("-------Even numbers from 10 to 40---------")

let number=10;
while(number<=40){
    if(number%2===0){
        console.log(number);
    }
    number++;
}

console.log("-------Game checkpoints---------")

let i=1;
while(i<=100){
    if(i==100){
        console.log("You made it")
    }
     if(i==50){
        console.log("Half way!! ");
        i++
        continue
    }
     if(i%10==0){
        console.log(`Checkpoint ${i}`);
        
    }
    i++
}
console.log("All done!")