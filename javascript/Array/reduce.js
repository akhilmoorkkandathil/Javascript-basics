const nums=[12,34,35,25,12,34,75]
const sum=nums.reduce((result,num)=>{
    return result+num;
},0)
console.log(sum);


console.log('-----------------');

const sentens=['Akhil',' you',' are',' super']
const fullSentance=sentens.reduce((initial,word)=>{
    return initial+word;
},'')
console.log(fullSentance);

console.log('-----------------');

const nums1=[1,2,3,4,5,6,7,8,9,10]
const sum1=nums1.reduce((result,num)=>{
    if(num%2==0){
        return result+num;
    }
    return result;
},0)
console.log(sum1);

console.log('-----------------');


const removeWord=sentens.reduce((initial,word)=>{
    if(word===' are'){
        return initial
    }
    return initial+word
},'')
console.log(removeWord);

console.log('-----------------');

const nums2=[12,34,35,25,12,34,75]
const same=nums.reduce((result,num)=>{
    if(num%2===0){
        result.push(num);
    return result;
    }
    return result;
},[])
console.log(same);

console.log('-----------------');

const nums3=[12,34,35,25,12,34,75]
const sorted=nums3.sort();
console.log(sorted)