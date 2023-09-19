for (let i=1;i<=10;i++){
    if(i===5 ||i===7){
        try{
            throw('Boom!')
            //throw new Error('Boom!')
        }catch(message){
            console.log(`Error on loop ${i}`)
            i++
        }
    }
    console.log(i)
}
