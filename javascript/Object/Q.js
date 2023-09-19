const District={
    name:'Akhil',
    name2:'Unknown',
    id:84,
    neighbour:[12,13,24,35,43],
    kerala:{dis1:'mlpm',dis2:'kzkd',dis3:'kaskd'}
}
console.log(District)
delete District.name2
District.house='Krishnakripa'
console.log(District)
District['id']=11;
District.neighbour.push(85)
console.log(District)
District.people=1234
console.log(District)
console.log(District.neighbour[District.neighbour.length-2])
District.kerala.dis2='trntrm';
console.log(District)

const maximunPrice=District.neighbour.reduce((max,value)=>{
    if(max<value){
        return value;
    }
    return max
},0)
console.log(maximunPrice);

const funObject={
    log:(message)=>{
        console.log(message)
    }
}
const displayMessage=funObject.log("Hello world!...")
