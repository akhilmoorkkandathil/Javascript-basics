//checking a expression present in a string

const sentence="my name is Akhil"
const patern1=/n[abc]me/
console.log(sentence.match(patern1))
const patern2=/n[^bc]me/
console.log(sentence.match(patern2))
const patern3=/n[c-y]me/
console.log(sentence.match(patern3))
console.log(patern1.test(sentence))