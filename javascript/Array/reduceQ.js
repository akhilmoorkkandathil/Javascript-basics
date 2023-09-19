const copanies=['amazone','tesla','space-x','flipcart','team','towards']
const reduced=copanies.reduce((initial,company)=>{
    if(company.startsWith('t')){
        return initial;
    }
    initial.push(company);
    return initial;
},[])
console.log(reduced);

const copanies1=['amazone','tesla','space-x','flipcart','team','towards']
const reduced1=copanies.reduce((conc,company)=>{
     return conc+company.toUpperCase()+' ';  
},'')
console.log(reduced1);