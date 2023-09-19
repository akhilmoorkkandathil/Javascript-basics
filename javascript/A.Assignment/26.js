const string='12345'

try{
    const reverse = string.split('').reverse().join('')
    console.log('Reversed string is :',reverse)
}catch(err){
    console.log('Error :',err)
}

console.log('Type of my_string is : ',typeof(string))
