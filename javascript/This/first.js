const thisObject = {
    name:'Akhil',
    age:22,
    newfunction: function(){
        console.log(this)
        console.log(this.name)
       console.log(`Hello ${this.name}`)
    },
    anotherFn: ()=>{
        console.log(this)
        console.log(`Hello ${this.name}`)
    },
    antrObject: {
        name:'Anu',
        antrfn: function(){
            console.log(this)
            console.log(`Hello ${this.name}`)
        }
    }
}
thisObject.newfunction()
thisObject.anotherFn()
thisObject.antrObject.antrfn()