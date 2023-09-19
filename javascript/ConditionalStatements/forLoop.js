
for(let loggedin=false,lc=0; !loggedin;lc++){
    if(lc===3){
        loggedin=true
        break
    }
    console.log("Incorrect")
}

console.log("-------Game checkpoints---------")

for(i=0;i<=100;i++){
    if(i==100){
        console.log("Congrats.You made it")
        continue
    }
     if(i==50){
        console.log("Half way!! ");
        i++
        continue
    }
     if(i%10==0){
        console.log(`Checkpoint ${i}`);
        
    }
}
console.log("All done!")